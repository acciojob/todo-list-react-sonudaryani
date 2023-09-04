import "./styles.css";
import React, { useState } from "react";

export default function App() {
  let [todoList, setTodoList] = useState([]);
  let [todo, setTodo] = useState("");

  const handleClick = () => {
    setTodoList([...todoList, todo]);
    setTodo("");
  };
  return (
    <div className="add_tasks_section">
      <input onChange={(e) => setTodo(e.target.value)} />
      <button onClick={handleClick}>Add</button>
      <diV className="tasks_section">
      {todoList.map((todo, index) => (
        <InputChild
          key={index}
          todo={todo}
          todoList={todoList}
          setTodoList={setTodoList}
        />
      ))}
      </diV>
    </div>
  );
}
// this will change the state of the parent component
const InputChild = ({ todo, todoList, setTodoList }) => {
  let [isEditBtnClicked, setIsEditBtnClicked] = useState(false);
  let [updatedTodo, setUpdatedTodo] = useState("");

  const handleDeleteBtnClick = () => {
    const newTodoList = todoList.filter((item) => item != todo);
    console.log(newTodoList);
    setTodoList(newTodoList);
  };

  const handleUpdateBtn = () => {
    const updatedTodoList = todoList.map((item) => {
      if (item === todo) {
        return updatedTodo;
      } else return item;
    });
    setTodoList(updatedTodoList);
    setIsEditBtnClicked(false);
  };
  return (
    <div className="task">
      {isEditBtnClicked ? (
        <div>
          <input onChange={(e) => setUpdatedTodo(e.target.value)} />
          <button className="save" onClick={handleUpdateBtn}>Save</button>
        </div>
      ) : (
        <div>
          <p>{todo}</p>
          <button className="edit" onClick={() => setIsEditBtnClicked(true)}>Edit</button>
          <button className="delete" onClick={handleDeleteBtnClick}>Delete</button>
        </div>
      )}
    </div>
  );
};