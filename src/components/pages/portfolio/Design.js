import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import makeKey from '../../../utils/makeKey';

const Panel = styled.div`
  position: relative;
  
  &:hover div {
    display: flex;
  }

  &:hover img {
    filter: brightness(50%);
  }
`;

const Overlay = styled.div`
   display: none;
   position: absolute;
   top: 0;
   color:white;
   align-items:center;
   align-content:center;
   height: 100%;
   width: 100%;
   text-align: center;
   padding: 20px;

   p {
     margin: auto;
     font-size: 1.5rem;
   }
`;

const Image = styled.img`
  width: 100%;
  transition: .4s;
  filter: brightness(30%);
  padding:5px;
`;

const Design = ({ projects = [] }) => (
  <div className="row p-3">
    Coming soon
  </div>
);

Design.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape({}))
};

Design.defaultProps = {
  projects: []
};

export default Design;
