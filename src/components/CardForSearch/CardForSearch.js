import React from 'react';
import PropTypes from 'prop-types';
import styles from './CardForSearch.scss';

class CardForSearch extends React.Component {
      static propTypes = {
        title: PropTypes.node,
        id: PropTypes.string,
        index: PropTypes.number,
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

export default CardForSearch;