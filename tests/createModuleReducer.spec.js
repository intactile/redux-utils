import { createStore } from 'redux';
import { createModuleReducer } from '../src';

describe('createModuleReducer', () => {
  const invalidTypes = ['undefined', null, undefined];
  invalidTypes.forEach(invalidType => {
    it(`should fail if a supplied action type is ${invalidType}`, () => {
      const reducers = { [invalidType]: () => {} };
      expect(() => createModuleReducer(reducers)).toThrowError(
        `Can't create a module reducer with an invalid action type: ${invalidType}`
      );
    });
  });

  describe('the reducer', () => {
    let store;

    beforeEach(() => {
      store = createStore(
        createModuleReducer(
          {
            ADD: (state, action) => state + action.payload,
            MULTIPLY: (state, action) => state * action.payload
          },
          1
        )
      );
    });

    it('initialize the state', () => {
      expect(store.getState()).toEqual(1);
    });

    it('call the correct reducer', () => {
      store.dispatch({ type: 'ADD', payload: 2 });
      expect(store.getState()).toEqual(3);
      store.dispatch({ type: 'MULTIPLY', payload: 5 });
      expect(store.getState()).toEqual(15);
    });
  });
});
