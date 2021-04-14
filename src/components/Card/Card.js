import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.scss';

class Card extends React.Component {
      static propTypes = {
        title: PropTypes.node,
      }
  
      render(){
        const {title} = this.props;
        return(
          <section className={styles.component}>
            {title}
          </section>
        );
      }
}

export default Card;