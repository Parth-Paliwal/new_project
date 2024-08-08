import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB= async()=>{
    try {
        const connectionInstance = await mongoose.connect(`mongodb+srv://parthpaliwal941:BsW$6K816@cluster0.toigj.mongodb.net/${DB_NAME}`);
        console.log(`\n mongoose connected succesfully : ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("Error: ",error)
        process.exit(1)
    }
}

export default connectDB;