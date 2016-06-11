import React from 'react';
import { Provider } from 'react-redux';
import { Root } from './containers';
import configureStore from './configureStore';

export const SpeakingTablet = () =>
  <Provider store={configureStore()}>
    <Root />
  </Provider>;
