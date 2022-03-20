import {combineReducers} from 'redux';
import { article_reducers ,book_reducers,video_reducers,home_reducers} from './fatchreducers';
import { category1_reducers ,category2_reducers} from './fatch_category_reducers';
import { theme_reducers } from './theme_reducer';

const reducers = combineReducers({
    article_reducers,book_reducers,video_reducers,category1_reducers,category2_reducers,home_reducers,theme_reducers
})

export default reducers