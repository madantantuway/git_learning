import { useState, useRef } from "react";
import { MdAddBox } from "react-icons/md";

function AddTodo({ onNewItem }) {
  const [todoName, settodoName] = useState();
  const [dueDate, setdueDate] = useState();
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  // const handleNameChange = (event) => {
  //   settodoName(event.target.value);
  //   //noOfUpdate.current += 1;
  // };
  // const handleDateChange = (event) => {
  //   setdueDate(event.target.value);
  // };

  const handleAddButtonClicked = (event) => {
    event.preventDefault();

    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    console.log(`todoName :${todoName} dueDate : ${dueDate}`);
    onNewItem(todoName, dueDate);
    // settodoName("");
    // setdueDate("");
  };
  return (
    <div className="container">
      <form className="row kg-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="add todo here"
          ></input>
        </div>
        <div className="col-4">
          <input type="date" ref={dueDateElement}></input>
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success kg-button">
            <MdAddBox />
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddTodo;
