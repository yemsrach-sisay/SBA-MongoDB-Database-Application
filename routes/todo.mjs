// import express from "express";
// import Todo from "../models/todo.mjs";
// import connectDB from "../db/conn.mjs";
// const router = express.Router();

// // Get all todos
// router.get("/", async (req, res) => {
//   try {
//     //  const todos = await Todo.find();
//     const db = await connectDB();
//     let todos = await db.collection("form").find().toArray();
//     // res.render("index", { todos });
//     res.json(todos);
//   } catch (err) {
//     res.status(500).send(err.message);
//   }
// });

// // Get form to create new todo
// router.get("/new", (req, res) => {
//   res.render("todo-form", { todo: {} });
// });

// // Create new todo
// router.post("/", async (req, res) => {
//   try {
//     const newTodo = new Todo({
//       title: req.body.title,
//       completed: req.body.completed || false,
//     });
//     await newTodo.save();
//     res.redirect("/todos");
//   } catch (err) {
//     res.status(500).send(err.message);
//   }
// });

// // Get form to edit todo
// router.get("/edit/:id", async (req, res) => {
//   try {
//     const todo = await Todo.findById(req.params.id);
//     res.render("todo-form", { todo });
//   } catch (err) {
//     res.status(500).send(err.message);
//   }
// });

// // Update todo
// router.post("/edit/:id", async (req, res) => {
//   try {
//     await Todo.findByIdAndUpdate(req.params.id, {
//       title: req.body.title,
//       completed: req.body.completed || false,
//     });
//     res.redirect("/todos");
//   } catch (err) {
//     res.status(500).send(err.message);
//   }
// });

// // Delete todo
// router.get("/delete/:id", async (req, res) => {
//   try {
//     await Todo.findByIdAndRemove(req.params.id);
//     res.redirect("/todos");
//   } catch (err) {
//     res.status(500).send(err.message);
//   }
// });

// export default router;

import express from "express";
import connectDB from "../db/conn.mjs";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const db = await connectDB();
    const todos = await db.collection("form").find().toArray();
    res.json(todos);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

export default router;
