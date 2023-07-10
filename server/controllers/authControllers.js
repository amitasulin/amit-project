const bcrypt = require('bcrypt');
const User = require('../models/user');
const {generateToken} = require('../config/jwt');
const { AUTH_MAX_AGE } = process.env;

const signUp = async (req, res) => {
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

    const token = await generateToken(payload);

    res.cookie('token', token, {
        httpOnly: false,
        maxAge: AUTH_MAX_AGE
    });

    return res.status(200).json(payload);

    } catch(error) {
    return res.status(400).json({ error: error });
    }
};


const signIn = async (req, res) => {
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
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            role: user.role,
            profilePicture: user.profilePicture
        };

        const token = await generateToken(payload);

        res.cookie('token', token, {
            httpOnly: false,
            maxAge: AUTH_MAX_AGE,
        });

        res.status(200).json(payload);


    } catch(error) {
        res.status(400).json({error: 'Cannot sign you in'});
        
    }

};

const signOut = (req,res) => {
    res.clearCookie('token');
  res.status(200).json({message: 'Signed out successfully'});
};

module.exports = { signUp, signOut, signIn };

