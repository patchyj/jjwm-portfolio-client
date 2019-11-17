import React from 'react';
import PDFViewer from '../../../shared/PDFViewer';
import S from '../../../styledComponents';
import designList from './designList.json';

const Design = () => (
  <S.DesignGallery>
    <div className="column">
      <PDFViewer
        url={designList[0].url}
        id={designList[0].id}
        outline={designList[0].outline}
      />
    </div>
    <div className="column">
      <PDFViewer
        url={designList[1].url}
        id={designList[1].id}
        outline={designList[1].outline}
      />
      <PDFViewer
        url={designList[2].url}
        id={designList[2].id}
        outline={designList[2].outline}
      />
      <PDFViewer
        url={designList[3].url}
        id={designList[3].id}
        outline={designList[3].outline}
      />
    </div>
    <div className="column">
      <PDFViewer
        url={designList[4].url}
        id={designList[4].id}
        outline={designList[4].outline}
      />
    </div>
  </S.DesignGallery>
);

export default Design;
