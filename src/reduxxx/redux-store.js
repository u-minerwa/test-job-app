import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';


let reducers = combineReducers({
    form: formReducer
})

let store = configureStore({
    reducer: reducers
});

window.Storage = store;
export default store;

