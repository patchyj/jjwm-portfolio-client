/* eslint-disable no-trailing-spaces */
import React from 'react';
import PropTypes from 'prop-types';
import S from '../../styledComponents';

const FormGroup = ({
  label,
  placeholder,
  type,
  name,
  value,
  onChange,
  errors
}) => (
  <S.FormGroup>
    <div>
      <label htmlFor={name}>{label}</label>
    </div>
    <div>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={errors && 'is-invalid'}
      />
    </div>
  </S.FormGroup>
);

FormGroup.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.string
};

FormGroup.defaultProps = {
  type: 'text',
  label: '',
  placeholder: '',
  errors: ''
};

export default FormGroup;
