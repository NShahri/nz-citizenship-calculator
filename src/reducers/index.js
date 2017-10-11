import dateRangesReducer from './dateRangesReducer';
import {combineReducers} from 'redux';

export default combineReducers({
    dateRanges: dateRangesReducer
});