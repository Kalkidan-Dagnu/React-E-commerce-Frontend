import { applyMiddleware, compose } from "redux";
import { rootReducer } from "./root-reducer";
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { loggerMiddleware } from "./middleware/logger";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import logger from "redux-logger";
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from "./root.saga";


const sagaMiddleware = createSagaMiddleware();
const middlewares = [process.env.NODE_ENV !== 'production' && logger,sagaMiddleware].filter(Boolean);
const composeEnhancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const composedEnhancers = composeEnhancer(applyMiddleware(...middlewares))

const persistConfig = {
    key : 'store',
    storage,
    // blacklist: 'user'
    whitelist: 'cart'
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
        enhancers: [composedEnhancers]
    }
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);


