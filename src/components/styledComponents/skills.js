/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const SkillsWrapper = styled.div`
  min-height: 100vh;
  padding: 1rem;
  box-sizing: border-box;

  .row {
    align-items: center;

    label {
      display: inline;
    }
  }

  .progress {
    height: 0.5rem;
  }
`;

export const StyledProgressBar = styled.div`
  border-radius: 20px;
  background: linear-gradient(85deg, #4caf50, #673ab7);
`;
