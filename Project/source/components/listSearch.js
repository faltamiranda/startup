import _ from 'lodash'
import {addMovie, editMovie, deleteMovie, initialize} from '../applications/actions';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import CastAndCrew from './castAndCrew';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import store from '../applications/store';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

class ListSearch extends React.Component{
    constructor(props) {
        super(props);
        this.renderHelper = this.renderHelper.bind(this);
    }
    render() {
        return(
            <div>
                {this.renderHelper()}
            </div>
        );
    }
    renderHelper(){
        let helper=null;
        if (this.props.serie){

            helper = (
                <Card>
                    <CardTitle title={this.props.serie.name} />
                    <CardMedia className="resize" >
                        <img  src={this.props.serie.image} />
                    </CardMedia>
                    <CardText>
                        Genres: {this.props.serie.genres}
                    </CardText>
                    <CardText>
                        Description: {this.props.serie.summary}
                        <br/>
                        <br/>
                        Status: {this.props.serie.status}
                    </CardText>
                    <CardActions >
                        <RaisedButton label="Cast" onClick={this.props.castSearch.bind(this, this.props.serie.id)}/>
                        <RaisedButton label="Favorite"/>
                    </CardActions>

                    <CastAndCrew cast={this.props.castForMap}/>
                </Card>
            )
            return helper;
        }
    }
}
export default ListSearch
