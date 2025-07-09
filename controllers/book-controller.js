const Book = require("../models/book");

const getAllBooks = async (req, res) => {
  try {
    const getAllBooks = await Book.find({});
    if (getAllBooks.length > 0) {
      res.status(200).json({
        message: "List of all the books:",
        success: true,
        data: getAllBooks,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "No books found",
      });
    }
  } catch (e) {
    console.log("Error is:", e);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

const getSingleBook = async (req, res) => {
  try {
    const bookId = req.params.id;
    const getSingleBook = await Book.findById(bookId);
    if (!getSingleBook) {
      res.status(404).json({
        message: "No book found",
        success: false,
      });
    } else {
      res.status(200).json({
        message: "Book found",
        success: true,
        data: getSingleBook,
      });
    }
  } catch (e) {
    console.log("Internal Server Error", e);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

const AddBook = async (req, res) => {
  try {
    const newBookFormData = req.body;
    const newBook = await Book.create(newBookFormData);
    if (newBookFormData) {
      res.status(201).json({
        message: "Book added succesfully",
        success: true,
        data: newBook,
      });
    }
  } catch (e) {
    console.log(e);
  }
};

const updateBook = async (req, res) => {
  try {
    const updatedBookFormData = req.body;
    const updatedBookId = req.params.id;
    const updatedBook = await Book.findByIdAndUpdate(
      updatedBookId,
      updatedBookFormData,
      {
        new: true,
      }
    );
    if(updatedBook) {
      res.status(200).json({
        message: "Book updated",
        success: true,
        data: updatedBook,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Book doesn't exist",
      });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const deleteBook = async (req, res) => {
  try {
    const deleteById = await Book.findOneAndDelete(req.params.id);
    if (deleteById) {
      res.status(200).json({
        message: "Book deleted",
        success: true,
        // data: deleteById,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Book doesn't exist",
      });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = {
  getAllBooks,
  getSingleBook,
  AddBook,
  updateBook,
  deleteBook,
};
