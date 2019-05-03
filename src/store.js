import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './modules/reducers/root_reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialState={}) {
    return createStore(
      rootReducer,
      initialState,
      composeWithDevTools(applyMiddleware(thunk, )),
    );
}