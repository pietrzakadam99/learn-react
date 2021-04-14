import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.scss';
import {settings, listData} from './../../data/dataStore.js';

class Card extends React.Component {
    static propTypes = {
        title: PropTypes.node,
    }
  
  render(){
    return(
      <section className={styles.component}>
        {this.props.title}
      </section>
    )
  }
}

export default Card;