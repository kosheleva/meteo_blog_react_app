import { combineReducers } from 'redux';
import articles from './articles';
import categories from './categories';
import tags from './tags';

const rootReducer = combineReducers({
    articles,
    categories,
    tags
})

export default rootReducer;