import React, { useState } from "react";

export const TodoForm = () => {
  const [tarefa, setTarefa] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(tarefa);
  };
  
  return (
    <div>
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        className="todo-input"
        placeholder="O que faremos hoje?"
        type="text"
        onChange={(e) => setTarefa(e.target.value)}
      />
      <button className="todo-btn" type="submit">
        OK
      </button>
    </form>
    </div>
  );
};
