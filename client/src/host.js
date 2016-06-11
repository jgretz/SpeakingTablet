import React from 'react';
import { Provider } from 'react-redux';
import { Config } from './containers';
import configureStore from './configureStore';

export const SpeakingTablet = () =>
  <Provider store={configureStore()}>
    <Config />
  </Provider>;
