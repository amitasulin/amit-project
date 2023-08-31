# Amit Cannabis shop Backend

this is a nodejs application for the backend of the Amit Cannabis shop which is built with reactjs and this is the backend for it.

## Table of Contents

- [Installation](#installation)
- [Technology Used](#technology-used)
- [Usage](#usage)
- [Routes](#routes)
- [Error Handling](#error-handling)
- [Contributing](#contributing)
- [License](#license)

## Technology Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Tokens)
- bcryptjs
- Joi

## Installation

1. Clone the repository.
2. Install the required dependencies using the command `npm install` .
3. Set up the environment variables by creating a `.env` file and filling in the necessary information (e.g. MONGO_URI, JWT_SECRET ,AUTH_MAX_AGE ).
4. Run the application using the command `npm start` .

## Usage

in this application you can do the following:

- ### User authentication: Users can register, log in, and log out of their accounts.

1.  signUp : This function handles the user sign-up process. It takes the user's information (firstName, lastName, email, password, profilePicture) from the request body, checks if the user already exists, hashes the password, creates a new user in the database, generates a JWT token, sets the token as a cookie, and returns the user's information along with the token.

2.  signIn : This function handles the user sign-in process. It takes the user's email and password from the request body, checks if the user exists in the database, compares the passwords, generates a JWT token, sets the token as a cookie, and returns the user's information along with the token.

3.  signOut : This function handles the user sign-out process. It clears the token cookie and returns a success message.

The file also imports necessary dependencies and helper functions from other files, such as bcrypt for password hashing and User model for interacting with the database. It uses the JWT configuration for generating and handling tokens. The AUTH_MAX_AGE environment variable is used to set the maximum age of the token cookie.

- ### User management: Users can view and update their profiles.

1.  getUserById : Retrieves a specific user by their ID from the database, excluding the password field. Returns the user object in the response.

2.  getData : Retrieves the data of the currently authenticated user by their ID from the database, excluding the password field. Returns the user object in the response. This function also checks if the authenticated user ID matches the requested user ID, ensuring authorization.

3.  createUser : Validates the request body using a Joi schema and creates a new user in the database with the provided information. Returns the created user object in the response.

- ### Strain management: Admins can create, view, update, and delete strains.

1.  getAll : Retrieves a paginated list of all strains from the database. Returns the list of strains in the response.

2.  getById : Retrieves a specific strain by its ID from the database. Returns the strain object in the response.

3.  create : Validates the request body using a Joi schema and creates a new strain in the database with the provided information. Returns the created strain object in the response.

4.  update : Validates the request body using a Joi schema and updates an existing strain in the database with the provided information. Returns the updated strain object in the response.

5.  delete : Deletes a strain from the database based on its ID. Returns the deleted strain object in the response.

6.  searchstrain : Performs a search for strains based on the provided query parameters (product name)

## Routes

- `/api/auth` - Authentication routes.
- `/api/users` - User routes.
- `/api/strains` - Strains routes.

Provide a brief description of each route and its purpose.

## Error Handling

Explain how errors are handled in your application. Mention any specific middleware or techniques used for error handling.
