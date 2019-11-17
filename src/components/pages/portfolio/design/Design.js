import React from 'react';
import PDFViewer from '../../../shared/PDFViewer';
import S from '../../../styledComponents';
import designList from './designList.json';

const Design = () => (
  <S.DesignGallery>
    <div className="column">
      <PDFViewer url={designList[0].url} id={designList[0].id} />
    </div>
    <div className="column">
      <PDFViewer url={designList[1].url} id={designList[1].id} />
      <PDFViewer url={designList[2].url} id={designList[2].id} />
      <PDFViewer url={designList[3].url} id={designList[3].id} />
    </div>
    <div className="column">
      <PDFViewer url={designList[4].url} id={designList[4].id} />
    </div>
  </S.DesignGallery>
);

export default Design;
