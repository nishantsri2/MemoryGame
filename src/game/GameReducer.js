import {
    INCREMENT_LEVEL,
    SET_CARD_LIST,
    INSERT_MATCHED_ITEM,
    SET_FIRST_SELECTION,
    INCREMENT_SCORE,
    INCREMENT_TIMER,
    SET_SECOND_SELECTION } from './ActionTypes';

const INITIAL_STATE = {
    level: 1,
    cardList: [],
    matchedList: [],
    firstCardIndex: null,
    score: 0,
    timerValue: 0, //seconds,
    secondCardIndex: null,
};

const GameReducer = (state = INITIAL_STATE, action) => {
switch (action.type) {
    case INCREMENT_LEVEL:
        return Object.assign({}, state, {
            level: state.level + 1,
            matchedList: [],
            firstCardIndex: null,
            timerValue: 0,
        });
    case SET_CARD_LIST:
        return Object.assign({}, state, {
            cardList: action.payload,
        });
    case INSERT_MATCHED_ITEM:
        return Object.assign({}, state, {
            matchedList: [...state.matchedList, action.payload],
            firstCardIndex: null,
            score: state.score + 1,
        });
    case SET_FIRST_SELECTION:
        return Object.assign({}, state, {
            firstCardIndex: action.payload,
        });
    case SET_SECOND_SELECTION:
        return Object.assign({}, state, {
            secondCardIndex: action.payload,
        });
    case INCREMENT_TIMER:
        return Object.assign({}, state, {
            timerValue: state.timerValue + 1,
        });
    default:
    return state;
}
};
export default GameReducer;
  