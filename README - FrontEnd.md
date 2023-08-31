# Amit Canabbis shop

This is a Amit Canabbis shop application built with React. It allows users to browse and buy canabbis.

## Features

- User authentication: Users can register, log in, and log out of their accounts.
  - and check for the role of the user and display the admin panel for admin and user panel for user.
  - with fancy messages to user to illustrate the process of registration and login success or failure.
- Homepage: Users are greeted with a homepage that displays recommended strains in slider, HowtoOrder instructions.

  - home page have about 4 main components:

    - Navbar: with the logo and the search bar and the login and register buttons and vary from users and admins.
      anout us page and contact us form.

    - All strains: with the recommended strains and data about it and option to see more details and buy.

    - footer: with links of more details (shipping policy and FAQ pages).

- Search: Users can search for strain by name through all the database of strains and can view and more details and also can add strains to wishlist or cart.

- Admin Strains: Administrators have access to an admin panel where they can manage strains through this main crud operations functions:

  - Add new strain: Admins can add new strain to the application.
  - Edit strain: Admins can edit the details of existing strain and by clicking it get all data of this strain.

  - Delete movie: Admins can delete movies from the application.

- Admin Users: Administrators have access to an admin panel where they can manage users and can make this main functions:

  - Edit users: Admins can view and edit user accounts and by clicking it get all data of this user so you can update what you want smoothly.

  - Delete users: Admins can delete users from the application.

  - Add new user: Admins can add new users to the application with respect that have new .

- User profile: Users can view and edit their profile information.

- Update role: Admins can update the role of users to be admin or user through toggle button.

## Installation

1. Clone the repository: `git clone https://github.com/`
2. Install dependencies: `npm install`
3. Start the development server: `npm start`

## Technologies Used

- React: JavaScript library for building user interfaces.
- React Router: Library for handling routing in React applications.
- CSS: Styling the application.
