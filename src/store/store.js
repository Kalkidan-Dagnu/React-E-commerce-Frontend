import { applyMiddleware, compose } from "redux";
import { rootReducer } from "./root-reducer";
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { loggerMiddleware } from "./middleware/logger";
import { configureStore } from "@reduxjs/toolkit";

const middlewares = [process.env.NODE_ENV !== 'production' && loggerMiddleware].filter(Boolean);
const composeEnhancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const composedEnhancers = composeEnhancer(applyMiddleware(...middlewares))

const persistConfig = {
    key : 'store',
    storage,
    blacklist: 'user'
}
const persistedReducer = persistReducer(persistConfig,rootReducer);

export const store = configureStore(
    {
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false,
          immutableCheck: false
        }),
        
    }
);

export const persistor = persistStore(store);


