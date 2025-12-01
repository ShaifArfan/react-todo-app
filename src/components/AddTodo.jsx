import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../slices/todoSlice";
import toast from "react-hot-toast";

const CATEGORIES = ["Work", "Personal", "Shopping", "Study"];

export default function AddTodo() {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Personal");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim()) {
      toast.error("Enter a task");
      return;
    }

    dispatch(addTodo(text, category));
    toast.success("Task added!");

    setText("");
    setCategory("Personal");
  };

  return (
    <form onSubmit={handleSubmit} className="addTodoForm">
      <input
        type="text"
        placeholder="Add a task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="todoInput"
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="categorySelect"
      >
        {CATEGORIES.map((cat) => (
          <option key={cat}>{cat}</option>
        ))}
      </select>

      <button type="submit" className="addButton">
        Add
      </button>
    </form>
  );
}
