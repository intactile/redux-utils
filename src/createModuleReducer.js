import invariant from 'invariant';

export default function createModuleReducer(reducers, initialState) {
  Object.keys(reducers).forEach(type => {
    invariant(
      !(type.includes('undefined') || type.includes('null')),
      `Can't create a module reducer with an invalid action type: ${type}`
    );
  });
  return (state = initialState, action) => {
    const { type } = action;
    if (reducers[type]) {
      return reducers[type](state, action);
    }
    return state;
  };
}
