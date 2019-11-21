import config from '../../../config';

export default endpoint => (config.NODE_ENV !== 'production' ? '../../../images/wireframes' : '');
