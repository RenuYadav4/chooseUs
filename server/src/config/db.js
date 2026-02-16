import mongoose from "mongoose"

const connectDB = async(url)=>{
try{
    const conn = await mongoose.connect(url);
    console.log(`Mongo db connection with database ${conn.connection.name}`);
} catch (error){
    console.error("DB connection failed:",error.message);
    process.exit(1); 
}
}

export default connectDB;