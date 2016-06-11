import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import config from './config';
import configSet from './configSet';
import md from './md';

const rootReducer = combineReducers({
  form: formReducer,

  config,
  configSet,

  md,
});

export default rootReducer;
