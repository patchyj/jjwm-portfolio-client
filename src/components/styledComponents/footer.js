/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import maxWidth from './breakpoints';

export const Footer = styled.div`
  width: 100%;
  transform: translateY(100%);

  .social,
  .recommend,
  .byline {
    width: 300px;
    margin: auto;
    transform: translateX(-35%);
  }

  .social,
  .recommend {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .byline {
    text-align: center;
    padding: 2rem;
  }

  .social a i {
    transition: 0.2s;
  }
  .social a:hover i {
    color: teal;
  }

  @media (max-width: ${maxWidth.medium}) {
    .social {
      width: auto;
      transform: none !important;
    }
  }
`;
