
const Joi = require("joi");

const mongoose = require('mongoose');
const Order = require("../models/order");
const { ObjectId }  = mongoose.Types
 
  // validation schema for user data
  
  const orderSchema = Joi.object({
      products: Joi.string().required(),
      quantity: Joi.string().required(),
      description: Joi.string().required(),     
      datetime: Joi.string().required()
  });


  
const getAllOrders = async (req, res, next) => {
    try { 
      const { page= 1 , limit= 25 } = req.query;

      if (limit > 50) limit = 50;
  
      const options = {
          page:parseInt(page),
          limit:parseInt(limit),
      } 
  
      const orders = await Order.paginate({}, options);
  
      const ordersFixed = { ... orders };
      ordersFixed.data = ordersFixed.docs;
      delete ordersFixed.docs;
  
      return res.status(200).json(ordersFixed);
  
  } catch (error) {
      next(error);
    }
  };
  
  
  const getOrderById = async (req, res, next) => {
    try { 
      const order = await Order.findById(new ObjectId (req.params.id));
      
      if (!order) {
          return res.status(404).json({error: 'Order not found'});
      }
      return res.status(200).json({data: order});
  
  } catch (error) {
      next(error);
    }

  };
  

  const addOrder = async (req, res, next) => {
      try {
          const { error } = orderSchema.validate (req.body);
          if(error) {
              return res.status(400).json({error: error.details[0].message});
          }
  
          const order = await Order.create(req.body);
          res.status(200).json({created: order});  
         
        } catch (error) {
          next(error);
      }
  };

const updateOrder = async (req, res, next) => {
  try { 
    const { error } = orderSchema.validate (req.body);

    if(error) {
        return res.status(400).json({error: error.details[0].message});
    }


        const order = await Order.findByIdAndUpdate(new ObjectId(req.params.id), req.body, {
            new: true,
        });

        if(!order) {
            return res.status(404).json({error:'Order not found'});
        }
         res.status(200).json({updated: order})

        }  catch (error) {
        next(error);
        }
}



const deleteOrder = async (req, res, next) => {
  try {
    const order = await Order.findByIdAndRemove(new ObjectId(req.params.id));
    if(!order) {
        res.status(404).json({error:'Order not found'});
    }
    res.status(200).json({deleted: order});
  } catch (error) {
    next(error);
  }
};




//full create/read/update/delete

module.exports = { getAllOrders, getOrderById, addOrder,updateOrder, deleteOrder }


