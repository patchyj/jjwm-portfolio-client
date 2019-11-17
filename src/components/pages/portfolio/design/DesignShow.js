/* eslint-disable operator-linebreak */
/* eslint-disable no-multi-spaces */
import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import S from '../../../styledComponents';
import PDFViewer from '../../../shared/PDFViewer';
import designList from './designList.json';
import config from '../../../../../config';

const prefix =
  config.NODE_ENV !== 'production' ? '../../../images/wireframes' : '';

const DesignShow = ({ url, id, ...props }) => {
  useEffect(() => {
    document.title = 'Jack McGregor | Design';
  });
  const { params } = props.match;
  const piece = designList.find(el => el.id === params.id);

  return (
    <S.DesignShow className="row">
      <div className="col-md-4 column">
        <div className="piece-container">
          <div className="description">
            <h1>{piece && piece.title}</h1>
            <p>{piece && piece.description}</p>
          </div>
        </div>
      </div>
      <div className="col-8 column">
        <PDFViewer
          url={piece && `${prefix}${piece.url}`}
          id={piece && piece.id}
          showall
          outline={piece && piece.outline}
        />
      </div>
    </S.DesignShow>
  );
};

DesignShow.propTypes = {
  url: PropTypes.string,
  id: PropTypes.string,
  match: PropTypes.shape({
    params: PropTypes.shape({})
  })
};

DesignShow.defaultProps = {
  url: '',
  id: '',
  match: {}
};

export default withRouter(DesignShow);
