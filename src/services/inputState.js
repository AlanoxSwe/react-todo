import { useState } from 'react';

export const useTitleState = () => {
  const [titleValue, setTitleValue] = useState('');

  return {
    titleValue,
    titleChange: e => {
      setTitleValue(e.target.value);
    },
    titleReset: () => setTitleValue(''),
  };
};

export const useDescState = () => {
  const [descValue, setDescValue] = useState('');

  return {
    descValue,
    descChange: e => {
      setDescValue(e.target.value);
    },
    descReset: () => setDescValue(''),
  };
};
