import { applyMiddleware, compose } from "redux";
import { rootReducer } from "./root-reducer";
import { legacy_createStore as createStore} from 'redux'

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

export const store = createStore(rootReducer,undefined,composedEnhancers)
