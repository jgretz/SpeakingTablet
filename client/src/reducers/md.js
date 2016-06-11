import { LOAD_MD_SUCCESS } from '../actions';

const INITIAL_VALUE = '';

export default (state = INITIAL_VALUE, action) => {
  switch (action.type) {
    case LOAD_MD_SUCCESS:
      return action.payload.data;

    default:
      return state;
  }
};
