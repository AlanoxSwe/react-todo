import React from 'react';
import '../../styles/error.scss';

const Error = ({ message }) => (
  <div className="error">
    {message}
  </div>
);

export default Error;
