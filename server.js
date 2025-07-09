require('dotenv').config();
const express = require('express');
const connectToDB = require('./database/db.js');
const bookRoutes = require('./routes/book-routes.js');

const app = express();
const PORT = process.env.PORT || 3000;

// connect to database
connectToDB();

// middleware
app.use(express.json());

// routes here
app.use("/api/books", bookRoutes);

app.listen(PORT,()=>{
    console.log(`server is now running on ${PORT}`);
});