import _ from 'lodash';
import {ADD_FAV, DELETE_FAV,INITIALIZE} from './actions'

const reducers = (state = [{ favs:{} }], action) => {
  switch (action.type) {
    case INITIALIZE:
   state.favs = [];
   if (localStorage.getItem('favs')) {
      state.favs = JSON.parse(localStorage.getItem('favs'));
   }
   return state

    case ADD_FAV:
    state.favs.push(action.serie);
    localStorage.setItem("favs", JSON.stringify(state.favs));

    return state.favs

    case DELETE_FAV:
    state.favs.splice(action.serie, 1);
    localStorage.setItem("favs", JSON.stringify(state.favs));
    return state.favs

    default:

  }
}

export default reducers
