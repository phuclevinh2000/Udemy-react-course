import React from 'react';

import classes from './Header.module.css';

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <button>Carttttttt</button>
      </header>
      <div className={classes['main-image']}>
        <img src='./assets/meals.jpg' alt='meal' />
      </div>
    </>
  );
};

export default Header;
