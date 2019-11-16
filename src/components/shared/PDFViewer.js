import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

const PDFViewer = ({ url, width }) => {
  const [pageNumber] = useState(1);
  const [numPages, setNumPages] = useState(null);
  return (
    <div>
      <Document
        file={url}
        onLoadSuccess={({ _pdfInfo }) => setNumPages(_pdfInfo.numPages)}
      >
        <Page pageNumber={pageNumber} width={width} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
};

export default PDFViewer;
