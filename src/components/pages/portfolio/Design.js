import React from 'react';
import PDFViewer from '../../shared/PDFViewer';

const Design = () => (
  <div className="row p-3">
    <PDFViewer url="../../../images/wireframes/bloomBirths.pdf" width={200} />
    <PDFViewer url="../../../images/wireframes/Portfolio v1.pdf" width={200} />
    <PDFViewer url="../../../images/wireframes/Portfolio v2.pdf" width={200} />
    <PDFViewer url="../../../images/wireframes/Portfolio v3.pdf" width={200} />
    <PDFViewer
      url="../../../images/wireframes/Oddjob dashboard.pdf"
      width={200}
    />
  </div>
);

Design.propTypes = {
  // projects: PropTypes.arrayOf(PropTypes.shape({}))
};

Design.defaultProps = {
  // projects: []
};

export default Design;
