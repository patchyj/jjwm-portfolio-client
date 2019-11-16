import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import S from '../../styledComponents';

const ExpItem = ({
  company,
  companyUrl,
  city,
  role,
  from,
  to,
  description
}) => (
  <Fragment>
    <S.ExpItem>
      <h5>{role}</h5>
      <h6>
        {companyUrl ? (
          <a href={companyUrl} target="_blank" rel="noopener noreferrer">
            {company}
          </a>
        ) : (
          `${company}`
        )}
      </h6>
      <p>{city}</p>
      <h6 id="date">
        {from} - {to ? `${to}` : 'present'}
      </h6>
      <p>{description}</p>
    </S.ExpItem>
    <hr />
  </Fragment>
);

ExpItem.propTypes = {
  company: PropTypes.string,
  companyUrl: PropTypes.string,
  city: PropTypes.string,
  role: PropTypes.string,
  from: PropTypes.string,
  to: PropTypes.string,
  description: PropTypes.string
};

ExpItem.defaultProps = {
  company: '',
  companyUrl: '',
  city: '',
  role: '',
  from: '',
  to: '',
  description: ''
};

export default ExpItem;
