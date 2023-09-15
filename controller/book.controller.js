const { bookModel } = require("../models/book.model");

// Get all books
const getBooks = async (req, res) => {
  try {
    const books = await bookModel.find();
    res.status(200).json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error", error: error.message });
  }
};

// Get a single book by ID
const getBookById = async (req, res) => {
    const {id} = req.params
  try {
    const book = await bookModel.findById(id);
    if (!book) {
      return res.status(404).json({ msg: "Book not found" });
    }
    res.status(200).json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error", error: error.message });
  }
};

// Add a new book
const addBook = async (req, res) => {
  const payload = req.body;
  try {
    const newBook = new bookModel(payload);
    await newBook.save();
    res.status(201).json({ msg: "Book added", book: newBook });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error", error: error.message });
  }
};

// Update an existing book
const updateBook = async (req, res) => {
  const payload = req.body;
  try {
    const updatedBook = await bookModel.findByIdAndUpdate(
      req.params.id,
      payload,
      { new: true }
    );
    if (!updatedBook) {
      return res.status(404).json({ msg: "Book not found" });
    }
    res.status(200).json({ msg: "Book updated", book: updatedBook });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error", error: error.message });
  }
};

// Delete a book by ID
const deleteBook = async (req, res) => {
  try {
    const deletedBook = await bookModel.findByIdAndDelete(req.params.id);
    if (!deletedBook) {
      return res.status(404).json({ msg: "Book not found" });
    }
    res.status(200).json({ msg: "Book deleted", book: deletedBook });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error", error: error.message });
  }
};

module.exports = { getBooks, getBookById, addBook, updateBook, deleteBook };
