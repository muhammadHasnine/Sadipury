import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config()

const connectDB = async () =>{
    try {
            await mongoose.connect(process.env.Data,{
                useNewUrlParser: true,
                useUnifiedTopology: true
            }); 
            console.log("MongoDB Connection Successful");
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
   
}


export default connectDB;