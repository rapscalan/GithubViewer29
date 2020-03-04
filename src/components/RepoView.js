import React, { useEffect } from 'react';
import useRepos from '../reducers/userReducer';
import { Link, useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { isLoadingRepos, getRepos } from '../selectors/reposSelectors';

import { fetchRepos } from '../actions/repoActions';

export default function RepoView(){
  const state = useSelector(state => state);
  const repos = getRepos(state);

  const dispatch = useDispatch();
  const loading = useSelector(isLoadingRepos);
  
  console.log('repos: ', repos);
  
  const repoElements = repos.sort(function(a, b)  {
    
    const aName = Number((a.name.replace(/.*?(\d*)$/, '$1'))) || 0;
    const bName = Number((b.name.replace(/.*?(\d*)$/, '$1'))) || 0;
    return aName - bName;
  }).map(el => {
    const id = el.id;
    const name = el.name;
    
    return (
      <li key={id}>
        <a href={el.clone_url}>{name}</a>
      </li>
      // <li key={el.id}>
      //   <Link to={`/release/${el.id}/${name}`}>
      //     <img src={coverArt}></img>
      //     <h2>{title}</h2>
      //   </Link>
      // </li>
    );
  });

  return (
    <ul>
      {repoElements}
    </ul>
  );
}

//export default RepoView;
