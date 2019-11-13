import React from 'react';
import S from './styledComponents';
import './HomePage.scss';
import Footer from './shared/Footer';

const HomePage = () => (
  <div className="container">
    <S.StyledSection className="section-1">
      <h1 className="display-4 text-right">
        Jack
        <br />
        McGregor
      </h1>
      <div className="typewriter">
        <h4 className="typewriter-text text-muted">
          Fullstack Developer <br className="hide-on-large" /> and Designer.
        </h4>
      </div>
    </S.StyledSection>
    <S.StyledSection className="section-2 hide-on-small">
      <S.ParallaxContainer>
        <div className="window">
          <div className="view view1 left" id="view1" />
        </div>

        <div className="window">
          <div className="view view2 middle" id="view2" />
        </div>

        <div className="window">
          <div className="view view3 right" id="view3" />
        </div>
      </S.ParallaxContainer>
    </S.StyledSection>
    <Footer />
  </div>
);

export default HomePage;
