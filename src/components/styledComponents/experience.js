/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import maxWidth from './breakpoints';

export const Experience = styled.div`
  padding: 3rem 1rem;

  .listContainer {
    width: 600px;
  }

  @media (max-width: ${maxWidth.medium}) {
    .listContainer {
      width: 100%;
    }
  }
`;

export const ExpItem = styled.div`
  padding: 2rem 0;

  @media (max-width: ${maxWidth.medium}) {
  }
`;
