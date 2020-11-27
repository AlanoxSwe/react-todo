/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
// Styles
import '../../styles/card.scss';
// Components
import CardDelete from './CardDelete';

const Card = ({
  title, desc, deleteCard, selectCard, selected,
}) => {
  const completed = selected ? 'completed' : '';
  return (
    <article className={`post-it ${completed}`} onClick={selectCard}>
      {selected && <CardDelete clickEvent={deleteCard} />}
      <p className="post-it-title">
        {title}
      </p>
      <p className="post-it-body">
        {desc}
      </p>
    </article>
  );
};

export default Card;
