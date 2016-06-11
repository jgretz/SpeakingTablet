import { CONFIG_SET } from '../actions';

const INITIAL_STATE = false;

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CONFIG_SET:
      return true;

    default:
      return state;
  }
};
