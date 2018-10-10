import { combineReducers } from 'redux';
import BookReducer from './bookReducer';
import SelectedBookReducer from './selectedBookReducer';

export default combineReducers({
  books: BookReducer,
  selectedBook: SelectedBookReducer
});
