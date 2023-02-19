# oyebeauty-assignment

Express API for Movies
This is a Node.js server-side application that provides a RESTful API for managing movies. It uses the Express framework to handle HTTP requests, and Mongoose to interact with a MongoDB database.

Installation
To install the dependencies, run the following command:

npm install

To start the server, run the following command:

npm start
The server will be available at http://localhost:3000 (unless the PORT environment variable is set).

Endpoints

GET /
This endpoint returns an HTML page with a basic UI for interacting with the API.

POST /add-movie
This endpoint adds a new movie to the database. It expects a JSON body with the following fields:

title: The title of the movie.
director: The name of the movie's director.
releaseYear: The year the movie was released.

GET /get-paginated
This endpoint retrieves a paginated list of movies from the database. It accepts the following query parameters:

page: The page number to retrieve (default: 1).
limit: The number of movies to retrieve per page (default: 10).
