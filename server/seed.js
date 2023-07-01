require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./models/user');
const Strain = require('./models/strain');

const seedUsers = async () => {
    try {
        await User.deleteMany();

        const mockUsers = [
        {
            firstName: 'User',    
            lastName: 'Doe',
            email: 'user@gmail.com',
            password: await bcrypt.hash('user123', 10),
            role: 'user',
            profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU'
        },
        {
            firstName: 'Admin',    
            lastName: 'Selvador',
            email: 'admin@gmail.com',
            password: await bcrypt.hash('admin123', 10),
            role: 'admin',
            profilePicture: 'https://www.logiconme.com/assets/img-temp/400x450/img5.jpg'
        }, 
        ];
    await User.create(mockUsers);
    console.log('Mockup users created successfully');
    
    } catch (error) {
        console.log('Error creating mock users: ' , error);
    }
}

const seedStrains = async () => {
    try {
        await Strain.deleteMany();

        const seedStrainsJson = require ('./data/seedStrains.json');
        
        await Strain.create(seedStrainsJson);
        
        console.log('Seed strains added successfully');
    
    } catch (error) {
    console.log('Error occured while seeding strains to database');
    }
};


const seedAll = async () => {

    const arguments = process.argv; 
    
    if (!arguments.includes('ok')) {
        console.log('Warning !!');
        console.log('You are about to replace all data in your data base !');
        console.log('with mockup /seed data !');
        console.log('add ok if you want to continue !');
        process.exit(1);
    }

    //conenct to MongoDB
    await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true, 
    });

    // Run the seeding functions 
    await seedUsers();
    await seedStrains();


    // Finish the seeding functions
    console.log('Done seeding');
    process.exit(0);
}

seedAll();