/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import maxWidth from './breakpoints';

export const Footer = styled.div`
  width: 80%;
  transform: translateY(100%);

  .social,
  .recommend,
  .byline {
    width: 300px;
    margin: auto;
    display: flex;
    text-align:center;
    align-items: center;
    justify-content: space-between;
  }

  .recommend,
  .byline {
    justify-content: space-around;
  }

  .byline {
    padding: 2rem;
  }

  .social a {
    i {
      transition: 0.2s;
    }
    &:hover i {
      color: teal;
    }
  }

  @media (max-width: ${maxWidth.medium}) {
    margin-left: 0;

    .social,
    .recommend,
    .byline {
      width: auto;
      transform: none !important;
    }
  }

  @media (max-width: ${maxWidth.midMedium}) {
    width: 100%;
  }
`;
