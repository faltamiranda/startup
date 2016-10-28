import React from 'react';
import ReactDOM from 'react-dom';
import Input from './input';
import Button from './button';
import Label from './label';
import Movie from './movie';
import List from './list';

class Application extends React.Component{
  constructor(props) {
    super(props);
    this.state = {};
    this.getMovies = this.getMovies.bind(this);
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
    let movies = JSON.parse(localStorage.getItem("movies")) || [];
    movies.push(movie);
    localStorage.setItem("movies", JSON.stringify(movies));

    }


  movieClear (){
    console.log("clear")
    document.getElementById("title").value = "";
    document.getElementById("year").value = "";
    document.getElementById("duration").value = "";
    document.getElementById("myCheck").checked = false;

  }

  getMovies () {
     let movies = localStorage.getItem("movies") || [];
     return JSON.parse(movies);
   }

  editMovie(){

  }

  render() {
    return (
      <div>
        <Label value="Add or see your favorite Movie" />
        <Input inputType="text" inputId="title" inputHolder="Enter the title" />
        <Input inputType="text" inputId="year" inputHolder="Enter the year" />
        <Input inputType="text" inputId="duration" inputHolder="Enter the duration" />
        <Label value= "Favorite" />
        <Input inputType="checkbox" inputId="myCheck" />
        <Button buttonClick={this.addMovie} buttonId="addButton" buttonValue="Add your movie" />
        <Button buttonClick={this.movieClear} buttonId="clearButton" buttonValue="Clear texts" />
        <br />
        <Button  buttonClick={this.showMovie} buttonId="showButton" buttonValue="Show your movies" />
        <br />
        <Button buttonClick={this.editMovie} buttonId="editButton" buttonValue="Edit the movie" />
        <div>
        <List movies={this.getMovies()} />
        </div>
      </div>
    ) ;
  }

}

ReactDOM.render(<Application />, document.getElementById('app'));
