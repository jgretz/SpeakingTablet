import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import config from './config';

const rootReducer = combineReducers({
  form: formReducer,

  config,
});

export default rootReducer;
