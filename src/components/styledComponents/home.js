import styled from 'styled-components';
import maxWidth from './breakpoints';

export const StyledSection = styled.div`
  margin-bottom: 100px;
  position: relative;

  @media (max-width: ${maxWidth.medium}) {
    &.section-1 {
      transform: translateY(100px);
    }
  }
`;

export const ParallaxContainer = styled.div`
  display: flex;
  max-width: 960px;
  margin: 0 auto;

  .view1 {
    border-radius: 130px 130px 0 130px;
  }
  .view2 {
    border-radius: 0 130px 0 130px;
  }
  .view3 {
    border-radius: 0 130px 130px 130px;
  }
`;
