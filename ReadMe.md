# Bookstore API

A simple RESTful API for managing a bookstore, built with Node.js, Express, and MongoDB.

## Features

- **Create**: Add new books to the database.
- **Read**: Retrieve all books or a single book by ID.
- **Update**: Edit details of an existing book.
- **Delete**: Remove a book from the database.

## Project Structure

- `server.js` – Entry point, sets up Express and routes.
- `controllers/book-controller.js` – CRUD logic for books.
- `models/book.js` – Mongoose schema for books.
- `routes/book-routes.js` – Express routes for book endpoints.
- `database/db.js` – MongoDB connection logic.

## API Endpoints

| Method | Endpoint             | Description              |
|--------|----------------------|--------------------------|
| GET    | `/api/books/get`     | Get all books            |
| GET    | `/api/books/get/:id` | Get a single book by ID  |
| POST   | `/api/books/add`     | Add a new book           |
| PUT    | `/api/books/update/:id` | Update a book by ID   |
| DELETE | `/api/books/delete/:id` | Delete a book by ID   |

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Set up environment variables:**
   - Create a `.env` file for sensitive data (e.g., `PORT`, MongoDB URI).

3. **Start the server:**
   ```sh
   npm run dev
   ```
   The server runs on `http://localhost:3000` by default.

## Notes

- MongoDB connection string is configured in [`database/db.js`](database/db.js).
- Book schema is defined in [`models/book.js`](models/book.js).
- All book-related routes are in [`routes/book-routes.js`](routes/book-routes.js).
- CRUD logic is implemented in [`controllers/book-controller.js`](controllers/book-controller.js).
