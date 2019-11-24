/* eslint-disable object-curly-newline */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-plusplus */
import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import PropTypes from 'prop-types';
import uuidv2 from 'uuid/v1';
import S from '../styledComponents';
import Loader from './Loader';

const PDFViewer = ({ url, showall, outline }) => {
  const [pageNumber] = useState(1);
  const [numPages, setNumPages] = useState(null);
  const list = [];

  if (showall) {
    for (let i = 1; i <= numPages; i++) {
      const page = (
        <Page
          pageNumber={i}
          className="pdf-page"
          renderTextLayer={false}
          key={uuidv2()}
        />
      );
      list.push(page);
    }
  }
  return (
    <S.PDFViewer outline={outline}>
      <Document
        file={url}
        onLoadSuccess={({ _pdfInfo }) => setNumPages(_pdfInfo.numPages)}
        loading={<Loader width="100" name="pikachu" />}
      >
        {showall ? (
          list
        ) : (
          <Page
            pageNumber={pageNumber}
            className="pdf-page"
            renderTextLayer={false}
          />
        )}
      </Document>
    </S.PDFViewer>
  );
};

PDFViewer.propTypes = {
  url: PropTypes.string.isRequired,
  showall: PropTypes.bool,
  outline: PropTypes.bool
};

PDFViewer.defaultProps = {
  showall: false,
  outline: false
};

export default PDFViewer;
