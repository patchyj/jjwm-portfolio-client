import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import axios from 'axios';
import configureStore, { history } from './store/configureStore';
import Root from './components/Root';
import './styles/bootswatch.min.css';
// Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
require('./favicon.ico');
// Tell webpack to load favicon.ico
const store = configureStore();

setInterval(() => axios.get('https://jjwm-portfolio-api.herokuapp.com/test'), 60000);

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    const NewRoot = require('./components/Root').default;
    render(
      <AppContainer>
        <NewRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
