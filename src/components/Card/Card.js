import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.scss';
import { Draggable } from 'react-beautiful-dnd';

class Card extends React.Component {
      static propTypes = {
        title: PropTypes.node,
        id: PropTypes.string,
        index: PropTypes.number,
      }
  
      render(){
        const {title, id, index} = this.props;
        return(
          <section>
            <Draggable draggableId={id} index={index}>
              {(provided) => (
                <article
                  className={styles.component}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  ref={provided.innerRef}
                >
                  {title}
                </article>
              )}
            </Draggable>
          </section>
        );
      }
}

export default Card;