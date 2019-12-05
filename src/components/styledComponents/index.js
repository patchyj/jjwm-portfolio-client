import * as Nav from './nav';
import * as App from './app';
import * as Auth from './auth';
import * as Home from './home';
import * as About from './about';
import * as Skills from './skills';
import * as Footer from './footer';
import * as Portfolio from './portfolio';
import * as Experience from './experience';

export default {
  ...App,
  ...Auth,
  ...About,
  ...Nav,
  ...Home,
  ...Skills,
  ...Portfolio,
  ...Experience,
  ...Footer
};
