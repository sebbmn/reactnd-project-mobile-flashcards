import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import deckList from '../reducers';

export default function configureStore(initialState) {
    return createStore(
        deckList,
        initialState,
        applyMiddleware(thunk)
    );
}