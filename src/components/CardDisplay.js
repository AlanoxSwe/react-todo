/* eslint-disable react/no-array-index-key */
import React from 'react';
import Card from './common/Card';

const CardDisplay = ({
  done, todos, deleteTodo, selectTodo,
}) => (
  todos.map((todo, index) => (
    todo.selected === done
      ? (
        <Card
          title={todo.title}
          desc={todo.desc}
          selected={todo.selected}
          deleteCard={() => deleteTodo(index)}
          selectCard={() => selectTodo(index)}
          key={`${todo.title}-${todo.desc}-${index}`} />
      )
      : null
  ))
);

export default CardDisplay;
