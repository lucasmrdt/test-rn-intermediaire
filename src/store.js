// @flow
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import Reactotron from './ReactotronConfig';
import saga from './saga';
import indexReducer from './reducers/index';

const sagaMiddleware = createSagaMiddleware();

const store = Reactotron.createStore(
  indexReducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(saga);

export default store;
