import { SELECT_BOOK, DESELECT_BOOK } from '../actions';

export default (state = {}, action) => {
  switch (action.type) {
    case SELECT_BOOK:
      return action.payload
    case DESELECT_BOOK:
      return {}
    default:
      return state;
  }
}
