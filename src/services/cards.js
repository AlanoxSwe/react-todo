export const doneCount = todos => {
  let arr = [];
  if (todos) arr = todos.filter(todo => todo.selected);
  return arr.length || 0;
};

export const unDoneCount = todos => {
  let arr = [];
  if (todos) arr = todos.filter(todo => !todo.selected);
  return arr.length || 0;
};
