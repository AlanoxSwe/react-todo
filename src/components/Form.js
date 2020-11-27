import React, { useState } from 'react';
// Styles
import '../styles/form.scss';
// Components
import Error from './common/Error';
// States
import { useTitleState, useDescState } from '../services/inputState';

const Form = ({ saveTodo, todos }) => {
  const { titleValue, titleReset, titleChange } = useTitleState();
  const { descValue, descReset, descChange } = useDescState();
  const [error, setError] = useState(null);

  const validate = title => !todos.some(i => i.title === title);

  const onSubmit = e => {
    e.preventDefault();
    if (validate(titleValue.trim())) {
      saveTodo({
        title: titleValue.trim(),
        desc: descValue.trim(),
        selected: false,
      });
      titleReset();
      descReset();
    } else {
      setError('Title already exists');
    }
  };

  return (
    <>
      {error && <Error message={error} />}
      <form className="form" onSubmit={e => onSubmit(e)} onChange={() => setError(null)}>
        <input type="text" className="form-text" placeholder="Title..." value={titleValue} onChange={titleChange} />
        <input type="text" className="form-text" placeholder="Description..." value={descValue} onChange={descChange} />
        <button type="submit" className="form-btn" onClick={e => onSubmit(e)}>Add note</button>
      </form>
    </>
  );
};

export default Form;
