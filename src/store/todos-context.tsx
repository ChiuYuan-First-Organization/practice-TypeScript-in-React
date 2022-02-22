import React, { useState } from "react";
import Todo from "../models/Todo";

type todoContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<todoContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: () => {},
});

const TodosProvider: React.FC = (props) => {
  const [items, setItems] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    const newTodo = new Todo(text);
    setItems((prev) => [...prev, newTodo]);
  };

  const removeTodoHandler = (id: string) => {
    setItems((prev) => prev.filter((todo) => todo.id !== id));
  };

  const todoContextValue: todoContextObj = {
    items,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={todoContextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosProvider;
