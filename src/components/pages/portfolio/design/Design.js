/* eslint-disable object-curly-newline */
/* eslint-disable operator-linebreak */
/* eslint-disable no-multi-spaces */
import React from 'react';
import { Switch, Route, useRouteMatch, Link } from 'react-router-dom';
import PDFViewer from '../../../shared/PDFViewer';
import S from '../../../styledComponents';
import designList from './designList.json';
import config from '../../../../../config';
import DesignShow from './DesignShow';

const prefix =
  config.NODE_ENV !== 'production' ? '../../../images/wireframes' : '';

const Design = () => {
  const match = useRouteMatch();
  const gallery = (
    <S.DesignGallery>
      <div className="column">
        <Link to={`${match.url}/${designList[0].id}`}>
          <PDFViewer
            url={`${prefix}${designList[0].url}`}
            id={designList[0].id}
            outline={designList[0].outline}
          />
        </Link>
      </div>
      <div className="column">
        <Link to={`${match.url}/${designList[1].id}`}>
          <PDFViewer
            url={`${prefix}${designList[1].url}`}
            id={designList[1].id}
            outline={designList[1].outline}
          />
        </Link>
        <Link to={`${match.url}/${designList[2].id}`}>
          <PDFViewer
            url={`${prefix}${designList[2].url}`}
            id={designList[2].id}
            outline={designList[2].outline}
          />
        </Link>
        <Link to={`${match.url}/${designList[3].id}`}>
          <PDFViewer
            url={`${prefix}${designList[3].url}`}
            id={designList[3].id}
            outline={designList[3].outline}
          />
        </Link>
      </div>
      <div className="column">
        <Link to={`${match.url}/${designList[4].id}`}>
          <PDFViewer
            url={`${prefix}${designList[4].url}`}
            id={designList[4].id}
            outline={designList[4].outline}
          />
        </Link>
      </div>
    </S.DesignGallery>
  );

  return (
    <Switch>
      <Route path={`${match.path}/:designId`}>
        <DesignShow />
      </Route>
      <Route path="/">{gallery}</Route>
    </Switch>
  );
};

export default Design;
