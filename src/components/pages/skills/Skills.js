import React from 'react';
import uuidv1 from 'uuid/v1';
import PropTypes from 'prop-types';
import S from '../../styledComponents';

const Skills = ({ skillsList }) => {
  const bars =    skillsList
    && skillsList.map(skill => (
      <div className="col-md-4 col-sm-6 p-2" key={uuidv1()}>
        <div className="row m-0">
          <div className="col-md-4">
            <label htmlFor="html">{skill.name}</label>
          </div>
          <div className="col-md-8 progress">
            <S.StyledProgressBar
              name="html"
              role="progressbar"
              style={{
                width: `${skill.level}%`
              }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </div>
        </div>
      </div>
    ));

  return (
    <S.SkillsWrapper>
      <div className="mt-5">
        <div className="container">
          <h3 className="py-4">Skills</h3>
          <p className="my-5">
            If I'm not going forward, then I feel like I'm going backwards.
            These are just a few of the skills I've picked up in the 2.5 years
            since I started down this path and there's no shortage of things to
            learn..
          </p>
          <div className="row">{bars}</div>
        </div>
      </div>
    </S.SkillsWrapper>
  );
};

Skills.propType = {
  skillsList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      level: PropTypes.number
    })
  )
};

Skills.defaultProps = {
  skillsList: []
};

export default Skills;
