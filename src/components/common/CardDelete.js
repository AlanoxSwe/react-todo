import React from 'react';

const CardDelete = ({ clickEvent }) => (
  <button type="button" className="post-it-delete" onMouseUp={clickEvent}>&#10006;</button>
);

export default CardDelete;
