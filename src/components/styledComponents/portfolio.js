import styled from 'styled-components';
import maxWidth from './breakpoints';

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

export const DesignGallery = styled.div`
  display: flex;
  flex-wrap: wrap;

  .column {
    flex: 33.3333333%;
    padding-right: 8px;
    box-sizing: border-box;

    canvas {
      width: 100% !important;
      height: auto !important;
    }
  }

  @media (max-width: ${maxWidth.medium}) {
    .column {
      flex: 50%;
    }
  }
  @media (max-width: ${maxWidth.small}) {
    .column {
      flex: 100%;
    }
  }
`;

export const PDFViewer = styled.div`
  transition: 0.1s;
  max-width: 400px;

  /* &:hover {
    box-shadow: 0 5px 9px 0px #555;
  } */
  .pdf-page {
    outline: ${props => (props.outline ? '1px solid grey' : '')};
    margin-top: 8px;
    vertical-align: middle;
  }
`;

export const DesignShow = styled.div`
  box-sizing: border-box;

  &.row {
    margin: 0;
    padding: 0;

    .column {
      display: flex;
      padding-right: 8px;
      box-sizing: border-box;

      canvas {
        width: 100% !important;
        height: auto !important;
        margin-bottom: 10px;
      }

      .piece-container {
        display: flex;
        align-items: center;

        .description {

          h1 {
            padding: 0;
            text-align: left;
          }
        }
      }
    }
    .column-left {
      position:fixed;
      width:100%;
    }
    .column-right {
      justify-content: center;
    }
    @media (max-width: ${maxWidth.bsLarge}) {
      .column-left {
        position:relative;

        .piece-container {
          width: 100%;
        }
      }
    }
    @media (max-width: ${maxWidth.small}) {
      .column {
        flex: 100%;
      }
    }
  }


`;
