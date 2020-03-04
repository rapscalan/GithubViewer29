import React, { useEffect } from 'react';
import useRepos from '../reducers/userReducer';
import { Link, useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { isLoadingRepos, getRepos } from '../selectors/reposSelectors';
//import { getRepos } from '../services/githubApi';
import { fetchRepos } from '../actions/repoActions';

//const repos = require('../../data/myGithubRepos.json');
//onst repos = store.repos;
// const RepoView = ({ repos}) => {
export default function RepoView(){
  const state = useSelector(state => state);
  const repos = getRepos(state);
//const RepoView = () => {
  //const repos = 
  //const { name } = useParams();
  //const repos = useRepos(name);
  const dispatch = useDispatch();
  const loading = useSelector(isLoadingRepos);
  //const repos = useSelector(state);
  // const handleClick = repo => {
  //   dispatch()
  // }
  // useEffect(() => {
  //   dispatch(fetchRepos());
  // }, []);
  console.log('repos: ', repos);
  //if(loading)
    //return <Loading />;
  const repoElements = repos.sort(function(a, b)  {
    //console.log(`a: ${a.name} b: ${b.name}`);
    //console.log(b.name.replace(/.*?(\d*)$/, '$1'));
    //return Date(a.created_at) - Date(b.created_at);
    const aName = Number((a.name.replace(/.*?(\d*)$/, '$1'))) || 0;
    const bName = Number((b.name.replace(/.*?(\d*)$/, '$1'))) || 0;
    //console.log(`a-b: ${aName - bName}`);
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
