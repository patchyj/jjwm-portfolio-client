/* eslint-disable object-curly-newline */
/* eslint-disable operator-linebreak */
/* eslint-disable no-multi-spaces */
import React from 'react';
import { Switch, Route, useRouteMatch, Link } from 'react-router-dom';
import S from '../../../styledComponents';
import designList from './designList';
import DesignShow from './DesignShow';

const Design = () => {
  const match = useRouteMatch();

  const gallery = (
    <S.DesignGallery>
      <div className="column">
        <Link to={`${match.url}/${designList[0].id}`}>
          <S.Thumb src={designList[0].url} alt="Bloom Births" />
        </Link>
      </div>
      <div className="column">
        <Link to={`${match.url}/${designList[1].id}`}>
          <S.Thumb src={designList[1].url} alt="Bloom Births" />
        </Link>
        <Link to={`${match.url}/${designList[2].id}`}>
          <S.Thumb src={designList[2].url} alt="Bloom Births" />
        </Link>
        <Link to={`${match.url}/${designList[3].id}`}>
          <S.Thumb src={designList[3].url} alt="Bloom Births" outline />
        </Link>
      </div>
      <div className="column">
        <Link to={`${match.url}/${designList[4].id}`}>
          <S.Thumb src={designList[4].url} alt="Bloom Births" />
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
