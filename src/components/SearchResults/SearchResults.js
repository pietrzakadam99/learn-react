import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchResults.scss';
import Icon from './../Icon/Icon.js';
import Card from '../Card/Card.js';
import Container from '../Container/Container';
import { settings } from '../../data/dataStore';

class SearchResults extends React.Component {
    static propTypes = {
      title: PropTypes.string,
      cards: PropTypes.array,
      icon: PropTypes.string,
    }
    static defaultProps = {
      icon: settings.defaultColumnIcon,
      title: 'Search Results',
    }
    
    render () {
      const {title, icon, cards} = this.props;
      return (
        <section className={styles.component}>
          <Container>
            <h3 className={styles.title}><span className={styles.icon}><Icon name={icon}/></span>{title}</h3>
            <div className={styles,cards}>
              {cards.map(cardData => (
                <Card key={cardData.id} {...cardData} />
              ))}
            </div>
          </Container>
        </section>
      );
    }
}

export default SearchResults;