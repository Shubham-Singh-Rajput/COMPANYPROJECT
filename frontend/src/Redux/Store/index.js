import { compose, createStore } from 'redux';
import Token from './../Reducer/index';

const composer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose

export default createStore(Token,composer())