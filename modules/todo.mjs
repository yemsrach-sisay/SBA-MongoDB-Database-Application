import Todo from "../model/todo.mjs";

// Function to get all todos
export const getAllTodos = async () => {
  try {
    const todos = await Todo.find();
    return todos;
  } catch (err) {
    throw new Error(err.message);
  }
};

// Function to add a new todo
export const addTodo = async (title) => {
  try {
    const newTodo = new Todo({
      title,
    });
    await newTodo.save();
    return newTodo;
  } catch (err) {
    throw new Error(err.message);
  }
};

// Function to toggle the completion status of a todo
export const toggleTodo = async (id) => {
  try {
    const todo = await Todo.findById(id);
    if (!todo) {
      throw new Error("Todo not found");
    }
    todo.completed = !todo.completed;
    await todo.save();
    return todo;
  } catch (err) {
    throw new Error(err.message);
  }
};

// Function to delete a todo
export const deleteTodo = async (id) => {
  try {
    const deletedTodo = await Todo.findByIdAndDelete(id);
    if (!deletedTodo) {
      throw new Error("Todo not found");
    }
    return deletedTodo;
  } catch (err) {
    throw new Error(err.message);
  }
};
