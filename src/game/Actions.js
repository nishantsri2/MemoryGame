import {
  INCREMENT_LEVEL,
  SET_CARD_LIST,
  INSERT_MATCHED_ITEM,
  SET_FIRST_SELECTION,
  INCREMENT_TIMER,
  SET_SECOND_SELECTION} from './ActionTypes';

export const incrementLevel = () => ({
  type: INCREMENT_LEVEL
});

export const setCardList = cardList => ({
  type: SET_CARD_LIST,
  payload: cardList
});

export const insertMatchedItem = item => ({
  type: INSERT_MATCHED_ITEM,
  payload: item
});

export const setFirstCardIndex = selection => ({
  type: SET_FIRST_SELECTION,
  payload: selection
});

export const setSecondCardIndex = selection => ({
  type: SET_SECOND_SELECTION,
  payload: selection
});

export const incrementTimer = () => ({
  type: INCREMENT_TIMER,
});
