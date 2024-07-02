// import { MongoClient } from "mongodb";
// // const MONGODB_URL =
// //   "mongodb+srv://yemsrach2024:eyu&nati123@cluster0.kx8c3hr.mongodb.net/todo-list?retryWrites=true&w=majority&appName=Cluster0";

// // const client = new MongoClient(MONGODB_URL);

// // let conn;
// // async function connectDB() {
// //   try {
// //     conn = await client.connect();
// //     console.log("Connected to MongoDB");
// //     return client.db("todo-list");
// //   } catch (e) {
// //     console.error(e);
// //   }
// //   let db = conn.db("todo-list");
// // }

// //  module.exports = connectDB;
// // db.js

// const uri =
//   "mongodb+srv://yemsrach2024:eyu&nati123@cluster0.kx8c3hr.mongodb.net/todo-list?retryWrites=true&w=majority&appName=Cluster0";
// const client = new MongoClient(uri);

// export async function connectDB() {
//   try {
//     await client.connect();
//     console.log("Connected to MongoDB");
//     return client.db("todo-list");
//   } catch (err) {
//     console.error(err);
//   }
// }
// module.exports = connectDB;

import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://yemsrach2024:eyu&nati123@cluster0.kx8c3hr.mongodb.net/todo-list?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

async function connectDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    return client.db("todo-list");
  } catch (err) {
    console.error(err);
  }
}

export default connectDB;
