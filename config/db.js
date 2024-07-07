import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbconnect = async () => {
  try {
    const dburl = process.env.DB_URL;
    await mongoose.connect(dburl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (err) {
    console.err(err);
  }
};

export default dbconnect;
