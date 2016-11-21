export const ADD_MOVIE = 'ADD_MOVIE'
export const EDIT_MOVIE = 'EDIT_MOVIE'
export const DELETE_MOVIE = 'DELETE_MOVIE'
export const INITIALIZE = 'INITIALIZE'

export function addMovie(movie) {
  return { type: ADD_MOVIE, movies:movie }
}

export function editMovie(index,movie) {
  return { type: EDIT_MOVIE, indexMovie:index, movie:movie }
}

export function deleteMovie(index) {
  return { type: DELETE_MOVIE, indexMovie:index }
}
export function initialize(){
  return { type: INITIALIZE }
}
