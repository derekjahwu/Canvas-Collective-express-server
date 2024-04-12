const mongoose = require("mongoose");
const db = "mongodb+srv://derek:MwMqV8drYnDj7f2Q@paintings.wgybyca.mongodb.net/?retryWrites=true&w=majority&appName=Paintings";

mongoose.set("strictQuery", true, "useNewUrlParser", true);

const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log("MongoDB is Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
module.exports = connectDB;