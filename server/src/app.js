import express from "express";
import cors from "cors";
import loveRoutes from "./routes/loveRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/love",loveRoutes);

export default app;
