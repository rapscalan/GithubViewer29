import React from 'react';
//import styles from './Face.css';
//import { useSelector } from 'react-redux';
//import { getFace } from '../../data/selectors/moodsSelectors';

const UserForm = () => {
  //const face = useSelector(getFace);
  //return <p className={styles.Face}>{face}</p>;
  const onChange = () => {

  };
  const onSubmit = () => {

  };
  return (
    <form onSubmit={onSubmit}>
      <input type="text"
        name={name}
        onChange={onChange}
        placeholder="github user" />
      <button>Search</button>
    </form>
  );
};

export default UserForm;
