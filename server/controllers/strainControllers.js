const Strain = require("../models/strain");

const create = async (req, res, next) => {
 
  // validation schema for user data
  
  const strainSchema = Joi.object({
      name: Joi.string().required(),
      type: Joi.string().required(),
      description: Joi.string().required(),
      img_url: Joi.string(),
      mostCommonTerpene: Joi.string(),
      thcLevel: Joi.number()
  });
  
      try {
          const { error } = strainSchema.validate (req.body);
          if(error) {
              return res.status(400).json({error: error.details[0].message});
          }
  
          const { name, type, description, img_url, mostCommonTerpene, thcLevel } = req.body;
          
          const found = Strain.findOne({name});
          if(found) {
              return res.status(400).json({ error: 'This strain already exists'})
          }
  
            
          const strain = await Strain.create({
              name,
              type,
              description,
              img_url, 
              mostCommonTerpene,
              thcLevel
          });   
          
          return res.status(201).json({created: strain});
      
      } catch (error) {
          next(error);
      }
};

const getAll = async (req, res, next) => {
  try { 
    const { page= 1 , limit= 25 } = req.query;

    const options = {
        page:parseInt(page),
        limit:parseInt(limit),
    } 

    const strains = await Strain.paginate({}, options);

    const strainsFixed = { ... strains };
    strainsFixed.data = strainsFixed.docs;
    delete strainsFixed.docs;

    return res.status(200).json(strainsFixed);

} catch (error) {
    next(error);
}
};


const getById = async (req, res, next) => {
  try { 
    const strain = await Strain.findById(req.params.id);
    if (!strain) {
        return res.status(404).json({error: 'Strain not found'});
    }
    return res.status(200).json({data: strain});

} catch (error) {
    next(error);
}

};


const updateById = async (req, res, next) => {
  try { 
    // const { error } = userSchema.validate (req.body);
    // if(error) {
    //     return res.status(400).json({error: error.details[0].message});
    // }

    const { firstName, lastName, email, password, profilePicture, role } = req.body;

    let updatedUser;
    if (password!=='') {
        const hashedPassword = await bcrypt.hash(password, 10);
        updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {
                firstName,
                lastName,
                email,
                password: hashedPassword,
                profilePicture,
                role

            },
            {new:true}
            ).select('-password')
    } else {
        updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {
                firstName,
                lastName,
                email,
                profilePicture,
                role

            },
            {new:true}
            ).select('-password');
        };

        if(!updatedUser) {
            return res.status(404).json({error: 'User not found'});
        }

        return res.status(200).json({updated: updatedUser})

    } catch (error) {
        next(error);
    }
};


const deleteById = async (req, res, next) => {
  try {
    res.status(200).send();
  } catch (error) {
    next(error);
  }
};


const deleteAll = async (req, res, next) => {
  try {
    const deletedUser = await User.findByIdAndRemove(req.params.id).select('-password');

    if(!deleteUser) {
        return res.status(404).json({error: 'User not found'});
    }
    return res.status(200).json({deleted: deletedUser});

    } catch(error) {
        
        next(error);

    }
};

//full create/read/update/delete

module.exports = { create, getAll, getById, updateById, deleteById, deleteAll };
