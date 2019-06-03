import React from 'react';
import styled from 'styled-components';

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

const StyledProgressBar = styled.div`
  border-radius: 20px;
  background: linear-gradient(45deg, #e66465, #9198e5);
`;

const Skills = () => {
  const bars = skills.map(skill => (
    <div className="col-md-4 col-sm-6 p-2">
      <div className="row m-0">
        <div className="col-md-4">
          <label htmlFor="html">{skill.name}</label>
        </div>
        <div className="col-md-8 progress">
          <StyledProgressBar
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
    <div>
      <div className="mt-5">
        <div className="container">
          <h3 className="py-4">Skills</h3>
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa modi
            a omnis molestiae sequi voluptas vitae, dolor saepe minima dolores
            molestias voluptatem minus officia ipsa numquam iste architecto
            placeat perspiciatis.
          </p>
          <div className="row">{bars}</div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
