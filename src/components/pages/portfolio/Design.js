import React from 'react';
import Loader from '../../shared/Loader';

const Design = () => (
  <div className="row p-3">
    <h4>Coming soon</h4>
    <Loader width="200" name="pikachu" />
    <Loader width="200" name="pokeball" />
  </div>
);

Design.propTypes = {
  // projects: PropTypes.arrayOf(PropTypes.shape({}))
};

Design.defaultProps = {
  // projects: []
};

export default Design;
