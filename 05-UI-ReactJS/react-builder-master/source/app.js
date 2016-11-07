import React from 'react';
import Form from './form';
import Menu from './menu'
import store from './store';
import {addMovie, editMovie, deleteMovie, initialize} from './actions'

class Application extends React.Component{
  constructor(props) {
  super(props);
  this.getMov = this.getMov.bind(this);
  }
getMov(){
  if (this.props.params.index){
    let index = this.props.params.index
    let movies = JSON.parse(localStorage.getItem('movies'))
    return movies[index];
  }
}
getTitle(){
  let movie= this.getMov();
  return movie.title;
}
getYear(){
  let movie= this.getMov();
  return movie.year;
}
getDuration(){
  let movie= this.getMov();
  return movie.duration;
}
getFav(){
  let movie= this.getMov();
  return movie.fav;
}
  render() {
    return (
      <div>
        <Menu />
        <Form index={this.props.params.index} title={this.getTitle()} year={this.getYear()} duration={this.getDuration()} fav={this.getFav()}/>
      </div>

    ) ;
  }

}


export default Application
