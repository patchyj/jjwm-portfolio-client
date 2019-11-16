import styled from 'styled-components';

export const Portfolio = styled.div`
  min-height: 100vh;
  padding: 1rem;
  box-sizing: border-box;

  .jumbotron {
    background: none;
  }
`;

export const Panel = styled.div`
  position: relative;

  &:hover div {
    display: flex;
  }

  &:hover img {
    filter: brightness(50%);
  }
`;

export const Overlay = styled.div`
  display: none;
  position: absolute;
  top: 0;
  color: white;
  align-items: center;
  align-content: center;
  height: 100%;
  width: 100%;
  text-align: center;
  padding: 20px;

  p {
    margin: auto;
    font-size: 1.5rem;
  }
`;

export const Image = styled.img`
  width: 100%;
  transition: 0.4s;
  filter: brightness(30%);
  padding: 5px;
`;

export const Social = styled.h5`
  a {
    padding-right: 10px;
    transition: 0.2s;
  }

  a:hover {
    color: grey;
  }
`;
