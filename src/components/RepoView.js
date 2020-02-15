import React from 'react';
import { Link } from 'react-router-dom';
//import { getSongs } from '../services/musicBrainz';
//import { getReleases } from '../services/musicBrainz';
//import { useRepos } from '../hooks/repos';
import { useParams } from 'react-router-dom';
const repos = require('../../data/myGithubRepos.json');

const RepoView = () => {
  
  //const { name } = useParams();
  //const repos = useRepos(name);
  const repoElements = repos.sort(function(a, b)  {
    console.log(`a: ${a.name} b: ${b.name}`);
    console.log(b.name.replace(/.*?(\d*)$/, '$1'));
    //return Date(a.created_at) - Date(b.created_at);
    const aName = Number((a.name.replace(/.*?(\d*)$/, '$1')))||0;
    const bName = Number((b.name.replace(/.*?(\d*)$/, '$1')))||0;
    console.log(`a-b: ${aName - bName}`);
    return aName - bName;
    // //return 1;
  }).map(el => {
    const id = el.id;
    const name = el.name;
    
    return (
      <li key={id}>
        {name}
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
};

export default RepoView;
