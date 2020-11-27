import { useState } from 'react';

export default initialValue => {
  const [todos, setTodos] = useState(initialValue);

  return {
    todos,
    addTodo: newTodo => {
      setTodos([...todos, newTodo]);
    },
    deleteTodo: todoIndex => {
      const newTodos = todos.filter((_, index) => index !== todoIndex);
      setTodos(newTodos);
    },
    selectTodo: todoIndex => {
      const newTodos = todos.map((item, index) => {
        const todo = item;
        if (index === todoIndex) todo.selected = !todo.selected;
        return todo;
      });
      setTodos(newTodos);
    },
  };
};
