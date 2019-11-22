import React, { Fragment } from 'react';
import S from '../../styledComponents';
import { ExperienceType, ExperienceDefaultType } from '../../types/ExperienceType';

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

ExpItem.propTypes = ExperienceType;

ExpItem.defaultProps = ExperienceDefaultType;

export default ExpItem;
