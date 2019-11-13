import baseURL from './baseURL';

describe('baseURL', () => {
  it('should be localhost when development', () => {
    const NODE_ENV = 'development';

    expect(baseURL(NODE_ENV)).toBe('http://localhost:4000');
  });

  it('should be heroku when production', () => {
    const NODE_ENV = 'production';

    expect(baseURL(NODE_ENV)).toBe('https://jjwm-portfolio-api.herokuapp.com');
  });
});
