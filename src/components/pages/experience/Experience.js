import React from 'react';
import PropTypes from 'prop-types';
import uuidv2 from 'uuid/v1';
import { ExperienceType } from '../../types/ExperienceType';
import ExpItem from './ExpItem';
import S from '../../styledComponents';

const Experience = ({ expList }) => {
  const list = expList && expList.map(e => <ExpItem {...e} key={uuidv2()} />);
  return (
    <S.Experience>
      <div className="listContainer">
        {list && list.length ? list : 'Please add an experience'}
      </div>
    </S.Experience>
  );
};

Experience.propTypes = {
  expList: PropTypes.arrayOf(ExperienceType)
};

Experience.defaultProps = {
  expList: []
};

export default Experience;
