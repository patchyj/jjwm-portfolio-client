import makeKey from './makeKey';

describe('makeKey', () => {
  it('should create a key from arg and index', () => {
    const arg = 'Some Arguments 123';
    const index = 1;

    expect(makeKey(arg, index)).toBe('Some_Arguments_123__1');
  });
});
