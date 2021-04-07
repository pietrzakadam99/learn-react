import React from 'react';
import styles from './Hero.scss';

class Hero extends React.Component {
  render() {
    return (
      <header className={styles.component}>
        <h2 className={styles.title}>Things to do</h2>
        <img className={styles.image} src="https://i.postimg.cc/fyv97F8t/space.png" alt="space"/>
      </header>
    )
  }
}

export default Hero;
