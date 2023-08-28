require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("./models/user");
const Strain = require("./models/strain");

const seedUsers = async () => {
  try {
    await User.deleteMany();

    const mockUsers = [
      {
        firstName: "User",
        lastName: "Doe",
        email: "user@gmail.com",
        password: await bcrypt.hash("user123", 10),
        role: "user",
        profilePicture:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU",
      },
      {
        firstName: "Admin",
        lastName: "Selvador",
        email: "admin@gmail.com",
        password: await bcrypt.hash("admin123", 10),
        role: "admin",
        profilePicture:
          "https://www.logiconme.com/assets/img-temp/400x450/img5.jpg",
      },

      {
        firstName: "Moshe",
        lastName: "Napo",
        email: "moshe@gmail.com",
        password: await bcrypt.hash("moshe123", 10),
        role: "user",
        profilePicture: "https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg",
      },

      {
        firstName: "Meir",
        lastName: "Ben",
        email: "meir@gmail.com",
        password: await bcrypt.hash("meir1959", 10),
        role: "user",
        profilePicture:
          "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
      },

      {
        firstName: "Ben",
        lastName: "Asulin",
        email: "ben@gmail.com",
        password: await bcrypt.hash("ben123", 10),
        role: "user",
        profilePicture:
          "https://image.lexica.art/full_jpg/7515495b-982d-44d2-9931-5a8bbbf27532",
      },

      {
        firstName: "Yael",
        lastName: "Rom",
        email: "yael@gmail.com",
        password: await bcrypt.hash("yael123", 10),
        role: "user",
        profilePicture:
          "https://marketplace.canva.com/EAE_4-ugJng/1/0/1600w/canva-blue-yellow-simple-professional-instagram-profile-picture-kpwvs_syWG8.jpg",
      },

      {
        firstName: "Chen",
        lastName: "Asulin",
        email: "chen@gmail.com",
        password: await bcrypt.hash("chen0302", 10),
        role: "admin",
        profilePicture:
          "https://image.winudf.com/v2/image1/bmV0LndsbHBwci5naXJsc19wcm9maWxlX3BpY3R1cmVzX3NjcmVlbl8wXzE2NjgxMzc2MTRfMDg0/screen-0.webp?fakeurl=1&type=.webp",
      },

      {
        firstName: "Pinhas",
        lastName: "Shinder",
        email: "pinhas@gmail.com",
        password: await bcrypt.hash("pinhas123", 10),
        role: "user",
        profilePicture:
          "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp",
      },

      {
        firstName: "Miki",
        lastName: "Nofit",
        email: "miki@gmail.com",
        password: await bcrypt.hash("miki123", 10),
        role: "user",
        profilePicture:
          "https://images.pexels.com/photos/5378700/pexels-photo-5378700.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      },

      {
        firstName: "Gal",
        lastName: "Ben david",
        email: "gal@gmail.com",
        password: await bcrypt.hash("gal123", 10),
        role: "admin",
        profilePicture: "https://i.ytimg.com/vi/DKgW8UcGMNk/maxresdefault.jpg",
      },

      {
        firstName: "Shlomi",
        lastName: "Ben Yosef",
        email: "shlomi@gmail.com",
        password: await bcrypt.hash("shlomi123", 10),
        role: "user",
        profilePicture:
          "https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg",
      },

      {
        firstName: "Amit",
        lastName: "Asulin",
        email: "amit@gmail.com",
        password: await bcrypt.hash("amit123", 10),
        role: "admin",
        profilePicture:
          "https://1fid.com/wp-content/uploads/2022/07/aesthetic-profile-picture-1024x1024.jpg",
      },

      {
        firstName: "Oz",
        lastName: "Tinuk",
        email: "oz@gmail.com",
        password: await bcrypt.hash("oz123", 10),
        role: "user",
        profilePicture:
          "https://www.unigreet.com/wp-content/uploads/2020/04/Smiley-816x1024.jpg",
      },
      {
        firstName: "Arad",
        lastName: "Yaeld",
        email: "arad@gmail.com",
        password: await bcrypt.hash("arad123", 10),
        role: "user",
        profilePicture:
          "https://marketplace.canva.com/EAFXS8-cvyQ/1/0/1600w/canva-brown-and-light-brown%2C-circle-framed-instagram-profile-picture-2PE9qJLmPac.jpg",
      },
    ];
    await User.create(mockUsers);
    console.log("Mockup users created successfully");
  } catch (error) {
    console.log("Error creating mock users: ", error);
  }
};

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

const seedStrains = async () => {
  try {
    await Strain.deleteMany();

    const seedStrainsJson = require("./data/seedStrains.json");

    //add random price
    let seedStrainsJsonWithPrice = seedStrainsJson.map((strain) => ({
      ...strain,
      price: Math.floor(getRandomArbitrary(15, 40)),
      thcLevel: Number(strain.thc_level.replace("%", "")),
    }));

    await Strain.create(seedStrainsJsonWithPrice);

    console.log("Seed strains added successfully");
  } catch (error) {
    console.log("Error occured while seeding strains to database");
  }
};

const seedAll = async () => {
  const arguments = process.argv;

  if (!arguments.includes("ok")) {
    console.log("Warning !!");
    console.log("You are about to replace all data in your data base !");
    console.log("with mockup /seed data !");
    console.log("add ok if you want to continue !");
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
  console.log("Done seeding");
  process.exit(0);
};

seedAll();
