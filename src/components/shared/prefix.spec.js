import prefix from './prefix';

describe('prefix', () => {
  it('should return url if NODE_ENV is NOT productin', () => {
    expect(prefix()).toBe('../../../images/wireframes');
  });
});
