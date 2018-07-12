import { createActionCreator } from '../src';

describe('createActionCreator', () => {
  it('the actionCreator should return an action with a payload ', () => {
    const actionCreator = createActionCreator('ADD');

    expect(actionCreator(10)).toEqual({ type: 'ADD', payload: 10 });
  });
  it('the actionCreator should use parameter in the payload ', () => {
    const actionCreator = createActionCreator('INCREMENT');
    expect(actionCreator()).toEqual({ type: 'INCREMENT' });
  });
});
