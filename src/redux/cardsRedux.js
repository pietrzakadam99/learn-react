import shortid from 'shortid';

// selectors
export const getCardsForColumn = ({cards, searchString}, columnId) => cards.filter(card => card.columnId == columnId && new RegExp(searchString, 'i').test(card.title));

// action name creator
const reducerName = 'cards';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const ADD_CARD = createActionName('ADD_CARD');
export const MOVE_CARD = createActionName('MOVE_CARD');

// action creators
export const createActionAddCard = payload => ({ payload: { ...payload, id: shortid.generate() }, type: ADD_CARD });

export const createAction_moveCard = payload => ({ payload: { ...payload }, type: MOVE_CARD });

// reducer

export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_CARD: {

      const targetColumnCards = statePart.filter(card => card.columnId === action.payload.columnId);

      return [...statePart, {
        ...action.payload,
        index: targetColumnCards.length,
      }];
    }
    case MOVE_CARD: {
      const {id, src, dest} = action.payload;
      const targetCard = statePart.filter(card => card.id == id)[0];


      const sourceIndex = statePart.findIndex(card => card.id === id);
      const destinationIndex = statePart.findIndex(card => card.columnId === dest.columnId && card.index === dest.index);



      if (dest.columnId == src.columnId) {
        statePart.splice(sourceIndex, 1);
        statePart.splice(destinationIndex, 0, targetCard);
        const targetColumnCards = statePart.filter(card => card.columnId == dest.columnId).map((card, index) => ({
          ...card,
          index,
        }));
        return statePart.map((card) => {
          if (card.columnId === dest.columnId) {
            return targetColumnCards.shift();
          } else {
            return { ...card };
          }
        });
      } else {
        return statePart;
      }
    }
    default:
      return statePart;
  }
}