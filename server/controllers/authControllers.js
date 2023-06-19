const bcrypt = require('bcrypt');
const User = require('../models/user');
const {generateToken} = require('../config/jwt');
const { response } = require('express');


const signUp = async (req, res, next) => {
    ///....new user sign-up
    const { firstName, lastName, email, password, profilePicture} = req.body;
    
    try {
    //check if user already exists
    const existingUser = await User.findOne({email});
    if (existingUser) {
        return res.status(409).json({error: 'User is already exists'});
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password,10)

    // create user in database 
    const newUser = await User.create({
        firstName,
        lastName,
        email,
        password: hashedPassword,
        profilePicture,
    });

    const payload = {
        id:newUser.id,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        role: newUser.role,
        profilePicture: newUser.profilePicture
    };
    const token = generateToken(payload);

    res.cookie('token', token, {
        httpOnly: true,
        maxAge: 90000, //15ms
    });

    res.status(200).json(payload);

}  catch(error) {
    next(error);
}
};


const signIn = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        // check if user exist in db
        const user = await User.findOne({ email }); 
        
        if (!user) {
            
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        // compare passwords

        const isMatch = await bcrypt.compare(password, user.password);

        // the password is incorrect
        if (!isMatch) {
            return res.status(401).json({ error:'Invalid email or password'});
        }
        const payload = {
            id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            role: user.role,
            profilePicture: user.profilePicture
        };

        const token = await generateToken(payload);
        res.cookie('token', token, {
            httpOnly: true,
            maxAge: 900000
        });

        res.status(200).json({message: 'Signed in successfully'});


    } catch(error) {
        res.status(400).json({error:'can not sign in'});
        
    }

}

const signOut = async (req, res, next) => {
  res.clearCookie('token');
  res.status(200).json({message: 'Signed out successfully'});
};

module.exports = { signUp, signOut, signIn };