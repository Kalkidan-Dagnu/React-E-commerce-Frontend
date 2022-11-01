import {categoriesSaga } from './categories/categories.saga';
import {all,call} from 'redux-saga/effects';

export function* rootSaga () {
    yield all([call(categoriesSaga)])
}