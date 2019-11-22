/* eslint-disable import/prefer-default-export */
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
import maxWidth from './breakpoints';

const fadeInAnimation = keyframes`${fadeIn}`;

export const Nav = styled.div`
  overflow-y: ${({ isOpen }) => (isOpen ? 'hidden' : 'auto')};

  .navbar {
    padding: 0;
    height: 100vh;
    text-align: center;
    position: fixed;
  }
  .navbar-expand .navbar-collapse {
    width: 16.6666666667%;
    background: rgb(231, 245, 245);
  }
  .fixed-top {
    z-index: 0;
  }
  .fa-bars,
  .fa-times {
    cursor: pointer;
  }

  .fadeIn {
    animation: 1s ${fadeInAnimation};
  }

  .dropdown {
    display: flex;
    flex-direction: column;

    ul {
      padding: 0;
      list-style: none;

      li {
      }
    }
  }

  @media (max-width: ${maxWidth.small}) {
    .nav-item {
      margin-right: 0;
    }
  }

  @media (max-width: ${maxWidth.medium}) {
    .navbar {
      height: ${({ isOpen }) => (isOpen ? '100vh' : 'auto')};
      background: rgb(231, 245, 245);
    }

    .fixed-top {
      z-index: 1030;
    }
  }
`;
