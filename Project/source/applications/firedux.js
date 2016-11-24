import Firedux from 'firedux'
import Firebase from 'firebase'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

let app;
let ref;

app = Firebase.initializeApp({
    apiKey: "AIzaSyCqL6qEJ1Fu9HGuN7ZKA98UvgrWN77Df_U",
    authDomain: "searchlyrics-90c57.firebaseapp.com",
    databaseURL: "https://searchlyrics-90c57.firebaseio.com",
    storageBucket: "searchlyrics-90c57.appspot.com"
});
ref = app.database().ref();

const firedux = new Firedux({
  ref
});

const reducer = combineReducers({
  firedux: firedux.reducer()
});

const middleware = applyMiddleware(
  thunk
);

const store = createStore(reducer, middleware);

firedux.dispatch = store.dispatch;

store.subscribe(() => {
  const state = store.getState();
  const { data, authData } = state.firedux;
  // console.log('Test data from Firebase:', data.test)

  if (authData && authData.auth && authData.auth.uid) {
    firedux.watch(`users/${authData.auth.uid}`);
  }
});

// export {firedux, store};

// PROBAR HACER EL firedux.dispatch = store.dispatch;
// Y EL store.subscribe EN APP

firedux.get('inputSong')
.then((result) => {
    console.log(result.snapshot.val());
});


firedux.set('test', true)
.then(({value}) => {});
