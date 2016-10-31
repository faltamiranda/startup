import React from 'react';
import Button from './button';

class List extends React.Component {
 constructor (props) {
   super(props);

   this.renderItem = this.renderItem.bind(this);
 }

 render() {
   return (
     <ul>
       {this.renderItems() }
     </ul>
   );
 }

 editMovie(index){
    let mo = JSON.parse(localStorage.getItem("movies"))
    console.log(index);
    console.log(mo[index].title);
}

 renderItems () {
    if (localStorage.getItem("movies") !== null){
      let mov = this.props.movies
      return mov.map(this.renderItem)
    }
}

 renderItem (item, index) {
   return (
     <li key={index}>
       {`Title: ${item.title} - Year: ${item.year} - Duration: ${item.duration} - Favorite:${item.fav}`}
       <Button buttonClick={this.editMovie.bind(this, index)} buttonId="editButton" buttonValue="Edit the movie" />
     </li>
   );
 }
};

export default List;
