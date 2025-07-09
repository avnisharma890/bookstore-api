const express = require('express');

const {getAllBooks, getSingleBook, AddBook, updateBook, deleteBook,} = require('../controllers/book-controller');

const router = express.Router()

// all routes related to books
router.get('/get', getAllBooks);
router.get('/get/:id', getSingleBook);
router.post('/add', AddBook);
router.put('/update/:id', updateBook);
router.delete('/delete/:id', deleteBook);

module.exports = router;