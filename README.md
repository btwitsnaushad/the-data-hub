# The Data Hub - Blog API

This is a RESTful API built with Node.js and Express.js for managing blog posts.

## Features
- **GET /posts**: Fetch all blog posts.
- **GET /posts/:id**: Fetch a specific post by ID.
- **POST /posts**: Create a new blog post.
- **PUT /posts/:id**: Update an existing blog post.
- **DELETE /posts/:id**: Delete a blog post.
- **POST /login**: Returns a mock JWT token.

## Setup Instructions
1. Run `npm install` to install dependencies.
2. Run `npx nodemon server.js` to start the server on port 5000.