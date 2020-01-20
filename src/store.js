import { createStore, applyMiddleware } from 'redux';
import incrementReducer from './reducers/index';
import createSagaMiddleware from 'redux-saga'
import { watchIncrementAsync , watchReduceAsync } from './sagas/index'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(incrementReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchIncrementAsync);
sagaMiddleware.run(watchReduceAsync);
export default store;
