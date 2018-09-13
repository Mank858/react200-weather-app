import { combineReducers } from 'redux';

import searchReducer from './Components/SearchInput/searchReducer'

const rootReducer = combineReducers({
    search: searchReducer
});

export default rootReducer;
