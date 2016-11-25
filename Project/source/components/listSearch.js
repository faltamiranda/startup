import _ from 'lodash'
import {addFav, deleteFav, initialize} from '../applications/actions';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import { connect } from 'react-redux';
import {Link} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import store from '../applications/store';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

class ListSearch extends React.Component{
    constructor(props) {
        super(props);
        this.state = {cast:[],
        favs:[]};
        this.renderListHelper = this.renderListHelper.bind(this);
        this.handleAddFav = this.handleAddFav.bind(this);
        this.handleRemoveFav = this.handleRemoveFav.bind(this);
    }
    render() {
        return(
            <div>
                {this.renderListHelper()}
            </div>
        );
    }
    renderListHelper(){
        let helper=null;
        if(_.isEmpty(this.props.serie) && _.isEmpty(this.props.person)){

        }
        else if (_.isEmpty(this.props.serie)){
          helper = (this.props.person.map( (person, index) => (
            <Card title="Series where person work">
            <CardTitle title={person._embedded.show.name} />
            <CardMedia className="resize" >
                <img  src={person._embedded.show.image.medium} />
            </CardMedia>
            <CardText>
              Genres: {person._embedded.show.genres}
            </CardText>
            <CardText>
              Description: {person._embedded.show.summary}
              <br/>
              <br/>
              Status: {person._embedded.show.status}
              </CardText>
              <CardActions >
                  <RaisedButton label="Add to favorite" onClick={this.handleAddFav.bind(this, person._embedded.show)}/>
              </CardActions>
            </Card>
          )));
        }
        else{
            helper = (
                this.props.serie.map( (serie, index) => (
                  <Card>
                  <CardTitle title={serie.show.name} />
                  <CardMedia className="resize" >
                      <img  src={serie.show.image.medium} />
                  </CardMedia>
                  <CardText>
                    Genres: {serie.show.genres}
                  </CardText>
                  <CardText>
                    Description: {serie.show.summary}
                    <br/>
                    <br/>
                    Status: {serie.show.status}
                  </CardText>
                    <CardActions >
                        <Link to={`/cast/${serie.show.id}`}><RaisedButton label="Cast" /></Link>
                        <RaisedButton label="Add to favorite" onClick={this.handleAddFav.bind(this, serie.show)}/>
                    </CardActions>
                  </Card>
                ))
            );
          }
        return helper;
    }


    handleAddFav(serie){
      store.dispatch(initialize())
      store.dispatch(addFav(serie));
    }
    handleRemoveFav(){
      store.dispatch(deleteFav(serie));
    }

}
export default ListSearch
