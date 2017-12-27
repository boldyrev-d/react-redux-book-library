import nanoid from 'nanoid';

export default () => next => (action) => {
  const { generateId, ...rest } = action;
  if (!generateId) return next(action);

  return next({
    ...rest,
    generatedId: nanoid(),
  });
};
