const jwt = require('jsonwebtoken');

const generateToken = (user) => {

return jwt.sign(
        {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            role: user.role,
            profilePicture: user.profilePicture,
        },
        process.env.JWT_SECRET,
        {expiresIn: '15m'}
    );
};

module.exports = {generateToken};