import React from 'react';
import PropTypes from 'prop-types';
import Pikachu from '../../images/pikachu.gif';
import Pokeball from '../../images/pokeball shake.gif';

const Loader = ({ width, name }) => {
  let type;
  switch (name) {
    case 'pikachu':
      type = Pikachu;
      break;
    case 'pokeball':
      type = Pokeball;
      break;
    default:
      type = '';
      break;
  }

  return (
    <div>
      <img src={type} alt="Loading..." width={width} />
    </div>
  );
};

Loader.propTypes = {
  width: PropTypes.string,
  name: PropTypes.string
};

Loader.defaultProps = {
  width: '',
  name: ''
};

export default Loader;
