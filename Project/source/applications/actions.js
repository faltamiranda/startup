export const ADD_FAV = 'ADD_FAV'
export const DELETE_FAV = 'DELETE_FAV'
export const INITIALIZE = 'INITIALIZE'

export function addFav(serie) {
  return { type: ADD_FAV, serie:serie }
}

export function deleteFav(index,serie) {
  return { type: DELETE_FAV, index:index, serie:serie }
}

export function initialize(){
  return { type: INITIALIZE }
}
