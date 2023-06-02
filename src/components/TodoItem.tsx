import Todo from "../models/todo";
import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{ todo: Todo; onDeleteTodo: (id: string) => void }> = (
  props
) => {
  const deleteTodoHandler = () => {
    props.onDeleteTodo(props.todo.id);
  };

  return (
    <li className={classes.item}>
      <button onClick={deleteTodoHandler}>{props.todo.text}</button>
    </li>
  );
};

export default TodoItem;
