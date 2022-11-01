
import {call, put, takeLatest, all} from 'redux-saga/effects';
import { getCategoriesAndDocuments } from '../../utils/firebase.utils';
import { CATEGORIES_ACTION_TYPES } from './category-action.types';
import { fetchCategoriesSuccees, fetchCategoriesFailed } from './category.action';


export  function* fetchCategoriesAsync() {
    try {
    const categoriesArray = yield call(getCategoriesAndDocuments, "categories");
    yield put(fetchCategoriesSuccees(categoriesArray));
    
} catch(error) {
    yield put(fetchCategoriesFailed(error))
    }
}

export function* onFetchCategories() {
    yield takeLatest(
        CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, 
        fetchCategoriesAsync
        )
}

export function* categoriesSaga() {
    yield all([call(onFetchCategories)])
}