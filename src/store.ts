import { applyMiddleware, compose, createStore, Store } from 'redux';
import { reducer, RootState } from './redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { persistStore, autoRehydrate } from 'redux-persist';
import { rootSaga } from './sagas';

const sagaMiddleware = createSagaMiddleware();

let store;

const DEV = process.env.NODE_ENV !== 'production';

export const getStore = (state, isServer?): Store<RootState> => {
  if (isServer && typeof window === 'undefined') {
    store = createStore<RootState, any, {}, undefined>(reducer, state, applyMiddleware(sagaMiddleware));
    store.sagaTask = sagaMiddleware.run(rootSaga);
    return store;
  } else {
    const composeEnhancers = (DEV && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
    if (!store) {
      const mw = [sagaMiddleware];
      if (!DEV) {
        if (window.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
          window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function() {};
        }
      } else {
        mw.push(
          createLogger({
            predicate: (getState, action) => !/^@@/.test(action.type),
            collapsed: true,
          }),
        );
      }

      store = createStore<RootState, any, {}, undefined>(
        reducer,
        state,
        composeEnhancers(applyMiddleware(...mw), autoRehydrate()),
      );

      const whitelist = ['persist', 'user'];
      persistStore(store, { whitelist }, _ => {
        console.log(`define whitelist: ${whitelist.join(', ')}`);
      });
    }
    store.sagaTask = sagaMiddleware.run(rootSaga);
    return store;
  }
};
