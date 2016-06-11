import { LOAD_CONFIG_SUCCESS } from '../actions';

const INITIAL_STATE = null;

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_CONFIG_SUCCESS:
      return action.payload;

    default:
      return state;
  }
};
