import dotenv from "dotenv";
dotenv.config(); 
import app from "./src/app.js";
import connectDB from "./src/config/db.js";

dotenv.config();


// console.log("ENV CHECK:", process.env.OPENAI_API_KEY);

const PORT = process.env.PORT||5000;
connectDB(process.env.MONGO_URI);


app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});