import React from 'react';
import PropTypes from 'prop-types';
import uuidv2 from 'uuid/v1';
import ExpItem from './ExpItem';
import S from '../../styledComponents';

const Experience = ({ expList }) => {
  const list = expList && expList.map(e => <ExpItem {...e} key={uuidv2()} />);
  return (
    <S.Experience>
      <div className="listContainer">{list}</div>
    </S.Experience>
  );
};

Experience.propTypes = {
  expList: PropTypes.arrayOf(
    PropTypes.shape({
      company: PropTypes.string,
      companyUrl: PropTypes.string,
      companyLogo: PropTypes.string,
      city: PropTypes.string,
      role: PropTypes.string,
      from: PropTypes.string,
      to: PropTypes.string,
      description: PropTypes.string
    })
  )
};

Experience.defaultProps = {
  expList: []
};
export default Experience;
