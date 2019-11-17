import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import S from '../../../styledComponents';
import PDFViewer from '../../../shared/PDFViewer';
import designList from './designList.json';

const DesignShow = ({ url, id, ...props }) => {
  useEffect(() => {
    document.title = 'Jack McGregor | Design';
  });
  const { params } = props.match;
  const piece = designList.find(el => el.id === params.id);
  console.log(piece);
  return (
    <S.DesignShow className="row">
      <div className="col-md-4 column">
        <div className="description">
          <h1>{piece && piece.title}</h1>
          <p>{piece && piece.description}</p>
        </div>
      </div>
      <div className="col-8 column">
        <PDFViewer url={piece.url} id={piece.id} showall />
      </div>
    </S.DesignShow>
  );
};

DesignShow.propTypes = {
  url: PropTypes.string,
  id: PropTypes.string
};

DesignShow.defaultProps = {
  url: '',
  id: ''
};

export default withRouter(DesignShow);
