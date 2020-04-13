import React from "react";
import ToDoItem from "./ToDoItem";


const ToDoList = (props) => {
  return (
    <div>
      {props.listData.map((item) => {
        return <ToDoItem item={item} key={item.number} toggleItem={props.toggleItem} />;
      })}
      <button onClick={props.clearTask}>Clear</button>
    </div>
  );
};

export default ToDoList;
