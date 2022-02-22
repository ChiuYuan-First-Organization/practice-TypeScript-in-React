import styles from "./NewTodo.module.css";

import React, { useContext, useRef } from "react";
import { TodosContext } from "../store/todos-context";

const NewTodo: React.FC = () => {
  const ctx = useContext(TodosContext);
  const inputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredValue = inputRef.current!.value;
    if (enteredValue.trim().length === 0) {
      return;
    }
    ctx.addTodo(enteredValue);
    inputRef.current!.value = '';
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <label htmlFor="new-todo">Todo Text</label>
      <input id="new-todo" type="text" ref={inputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
