export const selectBook = (book) => {
  return {
    type: 'select_book',
    payload: book
  }
}

export const deselectBook = () => {
  return {
    type: 'deselect_book',
    payload: {}
  }
}
