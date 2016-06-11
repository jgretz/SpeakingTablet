import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import devTools from 'remote-redux-devtools';

import reducers from './reducers';

export default (initialState) => {
  const enhancer = compose(applyMiddleware(thunk), devTools());
  const store = createStore(reducers, initialState, enhancer);
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(require('./reducers').default); // eslint-disable-line
    });
  }

  return store;
};
