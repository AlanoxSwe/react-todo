import React from 'react';
// Styles
import '../styles/cardDeck.scss';
// Components
import CardDisplay from './CardDisplay';
// Services
import { doneCount, unDoneCount } from '../services/cards';

const CardDeck = ({ todos, deleteTodo, selectTodo }) => (
  <main className="main">
    <section className="items">
      <div className="items-name">
        <h2 className="items-header">
          To Do
          <span className="items-count">{`(${unDoneCount(todos)})`}</span>
        </h2>
      </div>
      <div className="items-body">
        <CardDisplay
          done={false}
          todos={todos}
          deleteTodo={deleteTodo}
          selectTodo={selectTodo} />
      </div>
    </section>
    <section className="items">
      <div className="items-name">
        <h2 className="items-header">
          Done
          <span className="items-count">{`(${doneCount(todos)})`}</span>
        </h2>
      </div>
      <div className="items-body">
        <CardDisplay
          done
          todos={todos}
          deleteTodo={deleteTodo}
          selectTodo={selectTodo} />
      </div>
    </section>
  </main>
);

export default CardDeck;
