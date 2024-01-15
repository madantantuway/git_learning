import TodoItem from "./TodoItem";

function TodoItems({ todoItems, onDeleteClick }) {
  return (
    <div className="container">
      {todoItems.map((Item) => (
        <TodoItem
          key={Item.todoName}
          todoName={Item.todoName}
          todoDate={Item.dueDate}
          onDeleteClick={onDeleteClick}
        ></TodoItem>
      ))}
    </div>
  );
}
export default TodoItems;
