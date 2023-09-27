# Blogging-assignment
A simple blogging system with user registration, authentication, user roles, blog post management, and user profiles.

## Getting Started

### Prerequisites

Before running the project, make sure you have the following installed:

- Node.js and npm (Node Package Manager)
- MongoDB

### Installation

1. Clone the repository:
   git clone https://github.com/Neerajonwal/Blogging-assignment.git
   cd Blogging-assignment

   Install server dependencies:
   npm install
   
   Set up your MongoDB database and update the connection string in server/config/config.js.

   Start the server and client
   npm start or nodemon app.js

Features:-
User Registration and Authentication
User Roles: User and Admin
Blog Post Management
User Profiles
Secure JWT-based Authentication
MongoDB Database
Proper Input Validation and Sanitization

Usage:-
Authentication
Users can register with their email and password.
Users can log in securely using their credentials.
Authentication is handled using JWT (JSON Web Tokens).

Endpoints :-
Use tools like Postman to test the following endpoints:
User Registration:
POST /auth/register
Body:{
  "email": "user@example.com",
  "password": "password123"
}
User Login:
POST /auth/login
Body: {
  "email": "user@example.com",
  "password": "password123"
}
Create a Blog Post (Authenticated):

POST /blog/create
Headers:
Authorization: Bearer <JWT-Token>
Body:{
  "title": "My First Blog Post",
  "content": "This is the content of my first blog post."
}
Get All Blog Posts:
GET /blog/all
Delete a Blog Post (Admin Only):

DELETE /blog/:postId
Headers:
Authorization: Bearer <JWT-Token>
Get User Profile:

GET /user/:userId
Headers:
Authorization: Bearer <JWT-Token>
Edit User Profile:

PATCH /user/edit/:userId
Headers:
Authorization: Bearer <JWT-Token>
Body:{
  "email": "newemail@example.com"
}

User Roles
Two user roles: User and Admin.
New users have the role User by default.
Admins can view all blog posts and delete any blog post.

Database
MongoDB is used to store user data and blog posts.
Mongoose is used for schema modeling and interacting with the database.
Schemas for users and blog posts are defined in server/models.

Security
Proper validation and sanitization of user input are implemented to prevent security vulnerabilities.
User authentication is handled using JWT (JSON Web Tokens).
Error handling and input validation are in place to enhance security.

Troubleshooting
If you encounter any issues while setting up or using the blogging system, please contect me 9549850187 for possible solutions. i will do my best to assist you.
