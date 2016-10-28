import React from 'react';

class List extends React.Component {
 constructor (props) {
   super(props);

   this.renderItem = this.renderItem.bind(this);
 }

 render() {
   return (
     <ul>
       {this.renderItems()}
     </ul>
   );
 }

 renderItems () {
   let favourites = this.props.movies.filter( function(item) {
     return item.fav;
   })
   console.log(favourites);
   return favourites.map(this.renderItem);
 }

 renderItem (item, index) {
   return (
     <li key={index}>
       {`Title: ${item.title} Year: ${item.year} Duration: ${item.duration}`}
     </li>
   );
 }
}
//
// List.propTypes = {
//  movies: React.PropTypes.array.isRequired
// };

export default List;
