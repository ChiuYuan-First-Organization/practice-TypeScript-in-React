import styles from "./Todos.module.css";

import React, { useContext } from "react";
import { TodosContext } from "../store/todos-context";

import TodoItem from "./TodoItem";

const Todos: React.FC = () => {
  const ctx = useContext(TodosContext);

  return (
    <ul className={styles.todos}>
      {ctx.items.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          onRemove={ctx.removeTodo}
        />
      ))}
    </ul>
  );
};

export default Todos;
