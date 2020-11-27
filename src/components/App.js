import React from 'react';
// Styles
import '../styles/normalize.css';
import '../styles/index.scss';
// Components
import Header from './Header';
import Form from './Form';
import CardDeck from './CardDeck';
// States
import useTodoState from '../services/todoState';

const App = () => {
  const {
    todos, addTodo, deleteTodo, selectTodo,
  } = useTodoState([]);

  const saveTodo = todoText => {
    if (todoText.title.length > 0) addTodo(todoText);
  };

  return (
    <>
      <Header />
      <Form saveTodo={todoText => saveTodo(todoText)} todos={todos} />
      <CardDeck todos={todos} deleteTodo={deleteTodo} selectTodo={selectTodo} />
    </>
  );
};

export default App;
