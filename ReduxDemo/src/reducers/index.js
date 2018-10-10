import { combineReducers } from 'redux';
import BookReducer from './bookReducer';

export default combineReducers({
  books: BookReducer
});
