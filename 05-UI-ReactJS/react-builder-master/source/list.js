import React from 'react';
import Button from './button';
import Menu from './menu';
import Label from './label';
import store from './store';
import {addMovie, editMovie, deleteMovie, initialize} from './actions'
import {Link} from 'react-router';

class List extends React.Component {
 constructor (props) {
   super(props);

   this.renderItem = this.renderItem.bind(this);
   this.getMovies = this.getMovies.bind(this);
 }

 render() {
   return (
      <div>
         <Menu />
         <h1><Label value= "All Movies" /></h1>
         <ul>
         {this.getMovies()}
         </ul>
      </div>
   );
 }

 getMovies () {
 let movies = [];

 if (localStorage.getItem('movies')) {
    movies = JSON.parse(localStorage.getItem('movies'));
 }

 return movies.map(this.renderItem)
 }

 delete(index){
   store.dispatch(initialize());
   store.dispatch(deleteMovie(index));
   }

 edit(index){


   }

 renderItem (item, index) {
   return (
     <li key={index}>
       {`Title: ${item.title} - Year: ${item.year} - Duration: ${item.duration} - Favorite:${item.fav}`}
       <br/>
       <Link to={`app/${index}`}> EDIT </Link>
       <Link to="/list"><Button buttonClick={this.delete.bind(this, index)} buttonId="deleteButton" buttonValue="Delete the movie" /></Link>
     </li>
   );
 }
};

export default List;
