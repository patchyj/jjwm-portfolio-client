import React from 'react';
import uuidv1 from 'uuid/v1';
import S from '../styledComponents';

const skills = [
  { name: 'HTML', level: 90 },
  { name: '(S)CSS', level: 90 },
  { name: 'Javascript', level: 75 },
  { name: 'SQL', level: 65 },
  { name: 'Mongo', level: 60 },
  { name: 'Docker', level: 45 },
  { name: 'React', level: 75 },
  { name: 'NextJS', level: 50 },
  { name: 'Jenkins', level: 40 },
  { name: 'Ruby', level: 70 },
  { name: 'Rails', level: 70 },
  { name: 'NodeJS', level: 65 },
  { name: 'GraphQL', level: 65 },
  { name: 'REST', level: 65 },
  { name: 'Apollo', level: 65 },
  { name: 'Pasport', level: 65 },
  { name: 'Puns', level: 100 },
  { name: 'NodeJS', level: 65 },
  { name: 'Photoshop', level: 70 },
  { name: 'Illustrator', level: 75 },
  { name: 'Sketch', level: 70 }
];

const Skills = () => {
  const bars = skills.map(skill => (
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
            If I'm not going forward, then I feel like I'm going backwards. These are just a few of the skills I've picked up in the 2.5 years since I started down this path and there's no shortage of things to learn. I definitely lean towards the front-end/UX-UI side of the industry, but building out APIs is highly satisfying too.
          </p>
          <div className="row">{bars}</div>
        </div>
      </div>
    </S.SkillsWrapper>
  );
};

export default Skills;
