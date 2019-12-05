import React from 'react';
import PropTypes from 'prop-types';
import S from '../../styledComponents';

const FormSubmit = ({ label, onSubmit }) => (
  <S.FormSubmit onClick={onSubmit} type="button">
    {label}
  </S.FormSubmit>
);

FormSubmit.propTypes = {
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.func
};

FormSubmit.defaultProps = {
  onSubmit: () => {}
};

export default FormSubmit;
