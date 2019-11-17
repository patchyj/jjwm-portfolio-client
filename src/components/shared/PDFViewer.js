/* eslint-disable object-curly-newline */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-plusplus */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Document, Page } from 'react-pdf';
import PropTypes from 'prop-types';
import uuidv2 from 'uuid/v1';
import S from '../styledComponents';

const PDFViewer = ({ url, id, showall, outline }) => {
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
      <Link to={`/portfolio/${id}`}>
        <Document
          file={url}
          onLoadSuccess={({ _pdfInfo }) => setNumPages(_pdfInfo.numPages)}
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
      </Link>
    </S.PDFViewer>
  );
};

PDFViewer.propTypes = {
  url: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  showall: PropTypes.bool,
  outline: PropTypes.bool
};

PDFViewer.defaultProps = {
  showall: false,
  outline: false
};

export default PDFViewer;
