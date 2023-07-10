const Joi = require('joi');
const StrainList = require('../models/strainList');

const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;


// get movie list of the logged-in user

 const getMyStrainList = async (req, res, next) => { 
    
    const { id } = req.user;

    const strainList = await StrainList.find({userId: new ObjectId(id)});
 
    if (!strainList.length) {
        return res.status(404).json ({error: 'could not find a strain list for user'});
    }

    return res.status(200).json({ data: strainList });    
}

 // add a strain to list
const addStrainToList = async (req, res, next) => { 
    
    
    const schema = Joi.object ({
        strainId: Joi.string().required(), 
        status: Joi.string()
        .valid ('wantToBuy', 'alreadyBuyed')
        .default('wantToBuy'),
         rating : Joi.number().min(0).max(5)    
         .default(0)
    });


    const {error} = schema.validate(req.body); 
    if (error) { 
        return res.status(400).json({ error: error.details[0].message });

    };

    const userId = req.user.id;

    const { strainId, status= 'wantToBuy', rating=0 } = req.body;

    try {

        const foundStrain = await StrainList.find({strainId});
        if (!foundStrain) {
            return res.status(400).json({error: 'This strain does not exist.'});
        };
        
        const strainAlreadyInUserList = await StrainList.find({userId: new ObjectId(userId),strainId:new ObjectId(strainId)});
        
        if (strainAlreadyInUserList.length) {
            return res.status(400).json({error: 'This strain is already in your list.'});
        };
    

        const addedStrain = await StrainList.create({
            userId,
            strainId,
            status, 
            rating,
        });
    
        return res.status(200).json({created: addedStrain });
    
} catch (error) {
   
    next(error);
}

}
 // update a status & rating

const updateStatusAndRating = async (req, res, next) => {

    const schema = Joi.object ({
        status: Joi.string().valid('wantToBuy', 'alreadyBuyed').optional(),
        rating : Joi.number().min(1).max(5) .optional()   
    });


    const {error} = schema.validate(req.body); 
    if (error) { 
        
        return res.status(400). json({ error: error.details[0].message });

    }
    const objectId = req.params.id;

    const { status, rating } = req.body;

    
    if (!(status||rating)) {
        return res.status(400).json({ error: 'You must supply at least on paramter - status or rating' });
    };

    let payload = {}
    if(status) {
        payload.status = status;
    }
    if(rating) {
        payload.rating = parseInt(rating,10);
    }

    try {
        
    const updatedObject = await StrainList.findByIdAndUpdate(
        new ObjectId(objectId), 
        payload,
        {new: true},
        );
    
    if(!updatedObject) {
        return res.status(400).json({ error:'Could not update this object' });
    }    

    return res.status(200).json({data: updatedObject});

    } catch(error) {
        next(error);
        }
    };


 // delete a strain from list

 const deleteStrainFromList = async (req, res, next) => {
    
    const userId = req.user.id;
    const { id } = req.params;

    try {

        const deletedStrain = await StrainList.findByIdAndRemove({_id: new ObjectId(id)});
        if (!deletedStrain) {
            return res.status(404).json({error: 'This object id does not exist'});
        }

        return res.status(200).json({deleted: deletedStrain});

    } catch (error) {
        next(error);
    }
 }

 module.exports = { getMyStrainList, addStrainToList,updateStatusAndRating ,deleteStrainFromList}

 