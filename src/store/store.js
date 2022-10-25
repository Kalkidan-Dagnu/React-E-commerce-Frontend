import { applyMiddleware, compose } from "redux";
import { rootReducer } from "./root-reducer";
import { legacy_createStore as createStore} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const loggerMiddleware = (store) => (next) => (action) => {
    if(!action.type) {
    return next(action);
    }

    console.log('type :' , action.type);
    console.log('payload :', action.payload);
    console.log('Current State :', store.getState());

    next(action);

    console.log('next state', store.getState())

}

const middlewares = [loggerMiddleware];
const composedEnhancers = compose(applyMiddleware(...middlewares))

const persistConfig = {
    key : 'store',
    storage,
    blacklist: 'user'
}
const persistedReducer = persistReducer(persistConfig,rootReducer);

export const store = createStore(persistedReducer,undefined,composedEnhancers);

export const persistor = persistStore(store)
