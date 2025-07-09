const mongoose = require('mongoose');

const connectToDB = async() => {
    try {
        await mongoose.connect(
            "mongodb+srv://avnisharmacsit2022:avnisharmacsit2025@cluster0.hiweib1.mongodb.net/"
        );
        console.log("mongodb connected successfully!");
    } catch (error) {
        console.log("mongodb connection failed:", error);
        process.exit(1);
    }
}

module.exports = connectToDB;