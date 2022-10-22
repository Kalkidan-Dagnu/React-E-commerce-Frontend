import { applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
import { legacy_createStore as createStore} from 'redux'


const middlewares = [logger];
const composedEnhancers = compose(applyMiddleware(...middlewares))

export const store = createStore(rootReducer,undefined,composedEnhancers)
