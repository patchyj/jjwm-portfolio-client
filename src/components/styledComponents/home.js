import styled from 'styled-components';

export const StyledSection = styled.div`
  margin-bottom: 100px;
  position: relative;
`;

export const ParallaxContainer = styled.div`
  display: flex;
  max-width: 960px;
  margin: 0 auto;

  .view1 {
    border-radius: 130px 130px 0 130px
  }
  .view2 {
    border-radius: 0 130px 0 130px
  }
  .view3 {
    border-radius: 0 130px 130px 130px
  }
`;
