import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import {logger} from 'redux-logger'
import reducerIndex from './reducers/reducerIndex';

const initialState = {};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // development
//const composeEnhancers = compose; //build

export const store = createStore(
    reducerIndex, initialState,
    composeEnhancers(applyMiddleware(logger, thunk)) // development
    //composeEnhancers(applyMiddleware(), thunk) //build
);
