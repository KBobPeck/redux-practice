const mongoose = require("mongoose");
const config = require("config");

const db = config.get("mongoURI");

const connectDB = async () => {
  try {
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};
