import _ from 'lodash'
import {addMovie, editMovie, deleteMovie, initialize} from '../applications/actions';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import store from '../applications/store';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

class ListSearch extends React.Component{
    constructor(props) {
    super(props);
    }
    render() {
		    return(
			       <div>

                {this.props.seriesForMap.map( (serie, index) => (
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
                        <RaisedButton label="Cast" onClick={this.props.castSearch.bind(this, serie.show.id)}/>
                    </CardActions>
                    <CardActions>
                        <RaisedButton label="Favorite"/>
                    </CardActions>
                    <CardText>
                    <Table>
                    <TableHeader adjustForCheckbox={false} displaySelectAll={false} > 
                    <TableRow>
                    <TableHeaderColumn>Name</TableHeaderColumn>
                    <TableHeaderColumn>Character</TableHeaderColumn>

                    </TableRow>
                    </TableHeader>
                    <TableBody>
                    {this.props.castForMap.map( (cast, index) => (
                      <TableRow>
                      <TableRowColumn>{cast.person.name}</TableRowColumn>
                      <TableRowColumn>{cast.character.name}</TableRowColumn>
                      </TableRow>
                      ))}
                    </TableBody>
                    </Table>
                    </CardText>
                  </Card>
                  ))}

             </div>
		         );
      }
}
export default ListSearch
