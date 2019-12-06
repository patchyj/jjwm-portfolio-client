import recordSaga from '../../utils/testUtils/recordSaga';
import { httpPostRequest } from '../../utils/apiCall';
import { loginUser } from './authSaga';
import actionTypes from '../constants';

jest.mock('../../utils/apiCall');

describe('authSaga', () => {
  describe('Login', () => {
    let gen;

    beforeEach(() => {
      httpPostRequest.mockReset();
    });

    afterEach(() => {
      if (gen) {
        // test that the generator is done
        expect(gen.next().done).toEqual(true);
      }
    });

    it('should successfully login a user', async () => {
      // assemble
      // --- action
      const action = {
        payload: {
          email: 'test@test.com',
          password: 'password'
        }
      };
      // --- state
      const reduxState = {};
      // --- responses
      const mockResponse = {
        status: 200,
        data: {
          user: {
            id: '123',
            email: 'test@test.com'
          }
        }
      };

      httpPostRequest.mockReturnValueOnce(mockResponse);

      // act
      // --- recordSaga
      const dispatched = await recordSaga(loginUser, action, reduxState);

      // assert
      // --- test what the saga effects were called with, NOT what they return (that's what the --- responses is for)
      // --- test what was dispatched (actions)
      expect(httpPostRequest).toHaveBeenCalledWith('login', action.payload);

      expect(dispatched).toEqual([
        { type: actionTypes.LOGIN_USER_STARTED },
        {
          type: actionTypes.LOGIN_USER_SUCCESS,
          payload: {
            id: '123',
            email: 'test@test.com'
          }
        },
        {
          payload: {
            args: ['/about'],
            method: 'push'
          },
          type: '@@router/CALL_HISTORY_METHOD'
        }
      ]);
    });

    it('should throw an error if details are invalid', async () => {
      // assemble
      // --- action
      const action = {
        payload: {
          email: 'test@test.com',
          password: 'wrong_password'
        }
      };
      // --- state
      const reduxState = {};
      // --- responses
      const mockResponse = {
        status: 400,
        data: {
          errors: {
            password: 'wrong password'
          }
        }
      };

      httpPostRequest.mockReturnValueOnce(mockResponse);

      // act
      // --- recordSaga
      const dispatched = await recordSaga(loginUser, action, reduxState);

      // assert
      // --- test what the saga effects were called with, NOT what they return (that's what the --- responses is for)
      // --- test what was dispatched (actions)
      expect(httpPostRequest).toHaveBeenCalledWith('login', action.payload);

      expect(dispatched).toEqual([
        { type: actionTypes.LOGIN_USER_STARTED },
        {
          type: actionTypes.LOGIN_USER_FAILURE,
          response: {
            errors: {
              password: 'wrong password'
            }
          }
        }
      ]);
    });
  });
});
