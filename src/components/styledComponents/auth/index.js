import styled from 'styled-components';

export const AuthContainer = styled.div`
  margin-bottom: 3rem;
`;

export const AuthHeader = styled.div`
  font-size: 2rem;
  text-align: center;
  padding: 3rem;

  ul {
    padding: 0;
    list-style: none;

    li {
      padding: 1rem;
      display: inline;

      &.login {
        color: ${({ isLogin }) => (isLogin ? 'black' : 'grey')};
      }

      &.register {
        color: ${({ isLogin }) => (!isLogin ? 'black' : 'grey')};
      }

      span {
        cursor: pointer;
        transition: 0.2s;

        &:hover {
          color: black;
        }
      }
    }
  }
`;

export const AuthFooter = styled.div`
  text-align: center;
  color: red;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 400px;
  margin: auto;
  padding: 1rem;
  border: 1px solid ${({ isInvalid }) => (isInvalid ? 'red' : '#bbb')};
  border-radius: 5px;

  h4 {
    margin: 1rem auto;
  }
`;

export const FormGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-top: 20px;

  input {
    width: 100%;
    padding: 15px 10px 10px;
    border-radius: 5px;
    border: 1px solid #bbb;

    &:focus {
      outline: none;
    }
  }

  .is-invalid {
    border: 1px solid red;
  }
`;

export const FormSubmit = styled.button`
  margin-top: 20px;
  width: 100%;
  padding: 15px 10px 10px;
  border-radius: 5px;
  border: 1px solid #bbb;
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  transition: 0.1s;

  &:focus {
    outline: none;
  }

  &:hover {
    background: rgb(231, 245, 245);
  }
`;
