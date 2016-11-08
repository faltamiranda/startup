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
  this.state = { };
  this.addMovie = this.addMovie.bind(this);
  }

  addMovie () {

    let title =  document.getElementById("title").value;
    let year =  document.getElementById("year").value;
    let duration =  document.getElementById("duration").value;
    let fav = document.getElementById("myCheck").checked;
    let movie = new Movie(title,year,duration,fav);
    if(this.props.index === null || this.props.index === undefined){
      store.dispatch(initialize());
      store.dispatch(addMovie(movie));
    }
    else{
    store.dispatch(initialize());
    store.dispatch(editMovie(this.props.index,movie));
    }
  }

  movieClear (){
    console.log("clear")
    document.getElementById("title").value = "";
    document.getElementById("year").value = "";
    document.getElementById("duration").value = "";
    document.getElementById("myCheck").checked = false;

  }
  render() {
    return (
      <div>
        <h2><Label value="Add or see your favorite Movie" /></h2>
        <Input inputType="text" inputId="title" inputHolder="Enter the title"   inputValue={this.props.title} />
        <Input inputType="text" inputId="year" inputHolder="Enter the year"    inputValue={this.props.year} />
        <Input inputType="text" inputId="duration" inputHolder="Enter the duration"   inputValue={this.props.duration} />
        <h3><Label value= "Favorite" /></h3>
        <Input inputType="checkbox" inputId="myCheck"   inputCheck={this.props.fav} inputValue={""}  />
        <Button buttonClick={this.addMovie} buttonId="addButton" buttonValue="Add your movie" />
        <Button buttonClick={this.movieClear} buttonId="clearButton" buttonValue="Clear texts" />
      </div>

    ) ;
  }

}


export default Form
