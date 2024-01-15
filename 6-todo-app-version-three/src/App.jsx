import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import WellcomeMessage from "./components/WellcomeMessage";

function App() {
  // const [todoItems, settodoItems] = useState();
  // const arrtodoItems = [
  //   { todoName: "buy milk", dueDate: "2/01/2024" },
  //   { todoName: "buy vagitables", dueDate: "2/01/2024" },
  //   { todoName: "go to collage", dueDate: "5/01/2024" },
  // ];
  const [todoItems, settodoItems] = useState([]);
  const handleNewItem = (ItemName, ItemdueDate) => {
    console.log(`New Item Added : ${ItemName} Date: ${ItemdueDate}`);
    const NewtodoItems = [
      ...todoItems,
      { todoName: ItemName, dueDate: ItemdueDate },
    ];
    settodoItems(NewtodoItems);
  };
  const handleDeleteItem = (todoItemName) => {
    console.log(` Item Deleted : ${todoItemName} `);
    const NewtodoItems = todoItems.filter(
      (item) => item.todoName !== todoItemName
    );
    settodoItems(NewtodoItems);
  };

  return (
    <>
      <center>
        <AppName></AppName>
      </center>
      <AddTodo onNewItem={handleNewItem}></AddTodo>

      {todoItems.length === 0 && <WellcomeMessage></WellcomeMessage>}
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
    </>
  );
}

export default App;
