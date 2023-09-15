const { Router } = require("express");
const {
  getBooks,
  getBookById,
  addBook,
  updateBook,
  deleteBook,
} = require("../controller/book.controller");

const bookRouter = Router();

// GET all books
bookRouter.get("/", getBooks);

// GET a single book by ID
bookRouter.get("/:id", getBookById);

// POST a new book
bookRouter.post("/", addBook);

// PUT (update) an existing book
bookRouter.put("/:id", updateBook);

// DELETE a book by ID
bookRouter.delete("/:id", deleteBook);

module.exports = { bookRouter };
