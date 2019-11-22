import config from '../../../config';

export default () => (config.NODE_ENV !== 'production' ? '../../../images/wireframes' : '');
