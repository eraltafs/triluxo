# Triluxo Book API

This is a simple RESTful API for managing a collection of books. It supports basic CRUD (Create, Read, Update, Delete) operations using Node.js, Express.js, and MongoDB.

## Getting Started

Follow the steps below to clone and run the project locally:

1. Clone the repository:
`git clone https://github.com/eraltafs/triluxo.git`

2. Change to the project directory: `cd triluxo`

3. Create a `.env` file in the project root directory with the following content, replacing `<Your_MongoDB_URI>` with your MongoDB connection string:
mongo_URI=<Your_MongoDB_URI>


4. Install the required npm packages:
`npm install`

5. To run the server with continuous monitoring using Nodemon (recommended for development):
`nodemon server.js`



If you don't have Nodemon installed, you can install it globally:
`npm install -g nodemon`

mathematica


And then use:
`nodemon server.js`



Alternatively, you can run the server without Nodemon using:
`node server.js`




## API Endpoints

### Get All Books

- **URL:** `/books`
- **Method:** `GET`
- **Description:** Get a list of all books.

### Get Book by ID

- **URL:** `/books/:id`
- **Method:** `GET`
- **Description:** Get a single book by its ID.

### Add New Book

- **URL:** `/books`
- **Method:** `POST`
- **Body:**{"title":"Title", "author":"author name"}
- **Description:** Add a new book to the collection.

### Update Existing Book

- **URL:** `/books/:id`
- **Method:** `PUT`
- **Body:**{"title":"Title", "author":"author name"}
- **Description:** Update an existing book by its ID.

### Delete Book by ID

- **URL:** `/books/:id`
- **Method:** `DELETE`
- **Description:** Delete a book from the collection by its ID.

