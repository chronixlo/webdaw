import cn from './Util';

describe('cn', () => {
  it('adds strings together', () => {
    expect(
      cn(['first', 'second', 'third'])
    ).toEqual('first second third');
  });

  it('filter falsy values', () => {
    expect(
      cn([false, 0, null, 'onlythis'])
    ).toEqual('onlythis');
  });
})
