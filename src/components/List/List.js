import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from './../Column/ColumnContainer.js';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
import Creator from './../Creator/Creator.js';
import Container from './../Container/Container';
import {DragDropContext} from 'react-beautiful-dnd';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    description: PropTypes.node,
    columns: PropTypes.array,
    image: PropTypes.node,
    addColumn: PropTypes.func,
  }
  static defaultProps = {
    description: settings.defaultListDescription,

  }

  render() {
    const {title, image, description, columns, addColumn} = this.props;
    return (
      <Container>
        <section className={styles.component}>

          <h2><Hero titleText={title} heroImage={image}/></h2>

          <div className={styles.description}>
            {ReactHtmlParser(description)}
          </div>

          <DragDropContext>
            <div className={styles.columns}>
              {columns.map(columnData => (
                <Column key={columnData.id} {...columnData} />
              ))}
            </div>
          </DragDropContext>

        
          <div className={styles.creator}>
            <Creator text={settings.columnCreatorText} action={addColumn}/>
          </div>
          

        </section>
      </Container>
    );
  }
}

export default List;
