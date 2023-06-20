require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const { connectDatabase } = require("./config/database");

const authRoutes = require("./routes/authRoutes.js");
const strainRoutes = require("./routes/strainRoutes");
// const productRoutes = require('./routes/productRoutes');

// Activate express
const app = express();

// user middlware
app.use(cors());
app.use(helmet());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(express.static("static"));

//connect to database
connectDatabase();

//Routes
app.use("/api/auth", authRoutes);
app.use("/api/strains", strainRoutes);
// app.use('/api/products',productRoutes);

//Start server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
