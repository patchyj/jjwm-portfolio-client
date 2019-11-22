/* eslint-disable operator-linebreak */
/* eslint-disable no-multi-spaces */
import React from 'react';
import { withRouter, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import S from '../../../styledComponents';
import PDFViewer from '../../../shared/PDFViewer';
import designList from './designList.json';
import config from '../../../../../config';

const prefix =
  config.NODE_ENV !== 'production' ? '../../../images/wireframes' : '';

const DesignShow = () => {
  const { designId } = useParams();
  const piece = designList.find(el => el.id === designId);

  return (
    <S.DesignShow className="row">
      <div className="col-lg-4 col-12 column column-left">
        <div className="piece-container">
          <div className="description">
            <h1>{piece && piece.title}</h1>
            <p>{piece && piece.description}</p>
          </div>
        </div>
      </div>
      <div className="col-lg-8 offset-lg-4 col-12 column column-right">
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
  match: PropTypes.shape({
    params: PropTypes.shape({})
  })
};

DesignShow.defaultProps = {
  match: {}
};

export default withRouter(DesignShow);
