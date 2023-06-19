require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./models/user');
const { error } = require('console');
const strains = require('./models/strains');
const seedUsers = async () => {
    try {
        await User.deleteMany();

        const mockUsers = [
        {
            firstName: 'John',    
            lastName: 'Doe',
            email: 'john@gmail.com',
            password: await bcrypt.hash('user123', 10),
            role: 'user',
            profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU'
        },
        
        {
            firstName: 'Moshe',    
            lastName: 'Selvador',
            email: 'Moshe12@gmail.com',
            password: await bcrypt.hash('Admin545123', 10),
            role: 'Admin',
            profilePicture: 'https://www.logiconme.com/assets/img-temp/400x450/img5.jpg'
        }
        ];
    await User.create(mockUsers);
    console.log('MockUsers created successfully', error);
    
    } catch (error) {
        console.log('Error creating mock users');
    }
}

const seedlLeaflyStrains = async ()=> {

}



const seedAll = async () => {
    //conenct to MongoDB
    await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true, 
    });

    // Run the seeding functions 
    await seedUsers();


    // Finish the seeding functions
    console.log('Done seeding');
    process.exit(0);
}
seedAll();