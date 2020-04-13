import React from "react";

const ToDoItem = (props) => {
  return (
    <div
      className={`task ${props.item.completed ? "completed" : ""}`}
      onClick={(e) => props.toggleItem(props.item.number)}
    >
      {props.item.name}
    </div>
  );
};

export default ToDoItem;