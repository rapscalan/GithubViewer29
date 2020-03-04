import React from 'react';
import { useSelector } from 'react-redux';
import { getRepos } from '../selectors/reposSelectors';

export default function RepoView(){
  const state = useSelector(state => state);
  const repos = getRepos(state);

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
    );
  });

  return (
    <ul>
      {repoElements}
    </ul>
  );
}
