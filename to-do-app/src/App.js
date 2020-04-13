import React, { Component } from "react";
import Todoform from "./Components/Todoform";
import { listData } from "./Components/listData.js";
import ToDoList from "./Components/ToDoList";







class App extends Component {
  constructor() {
    super();
    this.state = {
      todoData: listData,
    };
  }

  toggleItem = itemNumber => {
    this.setState({
      todoData: this.state.todoData.map(item => {
        if (itemNumber === item.number) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    });
  };


  addItem = (todoText) => {
    const newTodo = {
      name: todoText,
      completed: false,
      number: Date.now(),
    };

    this.setState({ todoData: [...this.state.todoData, newTodo] });
  };

  clearTask = (e) => {
   
    this.setState({
      todoData: this.state.todoData.filter((item) => !item.completed),
    });
    console.log(this.state.todoData);
  };

  render() {
    return (
      <>
    <div>     
       <h1>To Do List</h1>
           <Todoform addItem={this.addItem} />
    </div>
       
       
       
        <ToDoList
         listData={this.state.todoData}
          toggleItem={this.toggleItem}
          clearTask={this.clearTask}
        />
      </>
    );
  }
}

export default App;
