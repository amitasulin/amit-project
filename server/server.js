// Require libraries and functions
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const { connectDatabase } = require("./config/database");
const { errorHandler } = require("./middleware/errorHandler");
const { refreshAuthTokenCookie } = require("./config/jwt");

// Required routes
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const strainRoutes = require("./routes/strainRoutes");
const orderRoutes = require("./routes/orderRoutes");

// Activate express
const app = express();

// user middlware
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(helmet());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(express.static("static"));

//connect to database
connectDatabase();

//refresh auth token (if exist)
app.use(refreshAuthTokenCookie);

//Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/strains", strainRoutes);
app.use("/api/orders", orderRoutes);

// error handler middleware
app.use(errorHandler);

//Start server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
