import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbconnect = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (err) {
    console.log(err);
  }
};

export default dbconnect;
