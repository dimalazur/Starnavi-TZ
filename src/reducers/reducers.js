import { combineReducers } from 'redux';
import {
  GET_HOUSE_MAP_SUCCESS,
  CHANGE_CARD_TEMPLATE,
} from '../actions/actions';

const initialState = {
  houseMapList: [],
  templateName: 'Default'
}

function houseMapStore (state = initialState, action)  {
  switch (action.type) {

    case GET_HOUSE_MAP_SUCCESS: {
      return {
        ...state,
        houseMapList: [...action.payload.data]
      }
    }
    case CHANGE_CARD_TEMPLATE: {
      return {
        ...state,
        templateName: action.payload
      }
    }
    default: {
      return state;
    }
  }
};

const store = combineReducers({
  houseMapStore,
})

export default store;