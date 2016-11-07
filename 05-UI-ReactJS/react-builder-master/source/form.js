import React from 'react';
import Input from './input';
import Button from './button';
import Label from './label';
import Movie from './movie';
import List from './list';
import store from './store';
import {addMovie, editMovie, deleteMovie, initialize} from './actions'

class Form extends React.Component{
  constructor(props) {
  super(props);
  this.state = {
    title: this.props.title,
    year: this.props.year,
    duration: this.props.duration,
    fav: this.props.favorite
  };
  this.addMovie = this.addMovie.bind(this);
  this.handlerChange = this.handlerChange.bind(this);
  }

  addMovie () {

    let title =  document.getElementById("title").value;
    let year =  document.getElementById("year").value;
    let duration =  document.getElementById("duration").value;
    let fav = document.getElementById("myCheck").checked;
    let movie = new Movie(title,year,duration,fav);
    console.log(movie.title);
    console.log(movie.year);
    console.log(movie.duration);
    console.log(movie.fav);
    console.log(movie);
    if(this.props.index === null){
      store.dispatch(initialize());
      store.dispatch(addMovie(movie));
    }

    store.dispatch(initialize());
    store.dispatch(editMovie(this.props.index,movie));

  }

  movieClear (){
    console.log("clear")
    document.getElementById("title").value = "";
    document.getElementById("year").value = "";
    document.getElementById("duration").value = "";
    document.getElementById("myCheck").checked = false;

  }
  handlerChange(param, event) {
  let newState = this.state;

  if (param === 'fav') {
    newState[param] = event.target.checked
  }
  else {
    newState[param] = event.target.value
  }
  this.setState(newState);
}


  render() {
    return (
      <div>
        <h2><Label value="Add or see your favorite Movie" /></h2>
        <Input inputType="text" inputId="title" inputHolder="Enter the title" onChange={this.handlerChange.bind(this, 'title')}  inputValue={this.props.title} />
        <Input inputType="text" inputId="year" inputHolder="Enter the year" onChange={this.handlerChange.bind(this, 'year')}   inputValue={this.props.year} />
        <Input inputType="text" inputId="duration" inputHolder="Enter the duration" onChange={this.handlerChange.bind(this, 'duration')}  inputValue={this.props.duration} />
        <h3><Label value= "Favorite" /></h3>
        <Input inputType="checkbox" inputId="myCheck" onChange={this.handlerChange.bind(this, 'fav')}  inputValue={this.props.fav} />
        <Button buttonClick={this.addMovie} buttonId="addButton" buttonValue="Add your movie" />
        <Button buttonClick={this.movieClear} buttonId="clearButton" buttonValue="Clear texts" />
      </div>

    ) ;
  }

}


export default Form
