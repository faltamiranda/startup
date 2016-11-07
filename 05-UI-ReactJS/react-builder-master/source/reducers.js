import {ADD_MOVIE, EDIT_MOVIE, DELETE_MOVIE, INITIALIZE} from './actions'

const reducers = (state = [{ moviesState:{} }], action) => {
  switch (action.type) {
    case INITIALIZE:
    state.moviesState = [];
    if (localStorage.getItem('movies')) {
       state.moviesState = JSON.parse(localStorage.getItem('movies'));
    }
    return state

    case ADD_MOVIE:
    state.moviesState.push(action.movies);
    localStorage.setItem("movies", JSON.stringify(state.moviesState));
    return state.moviesState

    case EDIT_MOVIE:
    state.moviesState.splice(action.indexMovie, 1, action.movie);
    localStorage.setItem("movies", JSON.stringify(state.moviesState));
    return state.moviesState

    case DELETE_MOVIE:
    state.moviesState.splice(action.indexMovie, 1);
    localStorage.setItem("movies", JSON.stringify(state.moviesState));
    return state.moviesState

    default:
      return
  }
}

export default reducers
