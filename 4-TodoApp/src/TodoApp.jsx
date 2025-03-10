import useTodos from "./useTodos";

export default function TodoApp() {
  const { todos, handleCompleted, handleRemoved } = useTodos();

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.title}
            <button onClick={() => handleCompleted(todo.id)}>Completed</button>
            <button onClick={() => handleRemoved(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
