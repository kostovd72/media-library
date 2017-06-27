import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import { createLogger } from 'redux-logger';
import rootSaga from '../sagas'; // TODO: Next step

//  Returns the store instance
// It can  also take initialState argument when provided
const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware(); 
  return {
    ...createStore(rootReducer, applyMiddleware(sagaMiddleware, createLogger())),
    runSaga: sagaMiddleware.run(rootSaga)
  };
};

export default configureStore;