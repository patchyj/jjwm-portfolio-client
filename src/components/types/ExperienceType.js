import PropTypes from 'prop-types';

export const ExperienceType = PropTypes.shape({
  company: PropTypes.string,
  companyUrl: PropTypes.string,
  city: PropTypes.string,
  role: PropTypes.string,
  from: PropTypes.string,
  to: PropTypes.string,
  description: PropTypes.string
}).isRequired;

export const ExperienceDefaultType = {
  company: '',
  companyUrl: '',
  city: '',
  role: '',
  from: '',
  to: '',
  description: ''
};
