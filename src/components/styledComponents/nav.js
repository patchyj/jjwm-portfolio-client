/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import maxWidth from './breakpoints';

export const Nav = styled.div`
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

  @media (max-width: ${maxWidth.small}) {
    .nav-item {
      margin-right: 0;
    }
  }

  @media (max-width: ${maxWidth.medium}) {
    .navbar {
      height: auto;
    }

    .fixed-top {
      z-index: 1030;
    }
  }
`;
