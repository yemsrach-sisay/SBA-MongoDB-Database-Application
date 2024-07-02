// import express from "express";
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import todoRoutes from "./routes/todo.mjs";
// import { MongoClient } from "mongodb";
// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 3000;

// app.set("view engine", "ejs");
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // Connect to MongoDB
// const MONGODB_URL =
//   "mongodb+srv://yemsrach2024:eyu&nati123@cluster0.kx8c3hr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// // const connectDB = async () => {
// //   try {
// //     await mongoose.connect(MONGODB_URL);
// //     console.log("MongoDB connected");
// //   } catch (err) {
// //     console.error("MongoDB connection error:", err.message);
// //     process.exit(1);
// //   }
// // };

// const client = new MongoClient(MONGODB_URL);
// //  const client = new MongoClient(process.env.ATLAS_URI)
// let db;

// export const connectDb = async () => {
//   try {
//     await client.connect();
//     db = client.db("todo-list");
//     console.log("Connected to MongoDB");
//     return db;
//   } catch (err) {
//     console.error("MongoDB connection failed", err);

//     throw err;
//   }
// };

// // connectDB();

// // Routes
// app.use("/todos", todoRoutes);

// app.use("/", (req, res) => {
//   res.send("home page");
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

import express from "express";
import todoRoutes from "./routes/todo.mjs";

const app = express();
const port = 3000;

app.use("/todos", todoRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
