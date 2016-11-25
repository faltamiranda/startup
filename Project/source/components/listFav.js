import Aired from './aired';
import {addFav, deleteFav, initialize} from '../applications/actions';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import store from '../applications/store';

class ListFav extends React.Component{
    constructor(props) {
        super(props);
        this.state = {favs:JSON.parse(localStorage.getItem('favs')),
        nextepisodeAirDate:'',
        nextepisodeAirTime:''};
        this.handleRemoveFav = this.handleRemoveFav.bind(this);
        this.componentWillMount = this.componentWillMount.bind(this);
        this.nextEpisode = this.nextEpisode.bind(this);
        this.handleNextEpisode = this.handleNextEpisode.bind(this);
    }
    render() {
        return(
            <div>
                {this.renderHelper()}
                {this.nextEpisode()}
            </div>
        );
    }
    componentWillMount(){
        let oldState = JSON.parse(localStorage.getItem('favs'))
        this.setState ({favs: JSON.parse(localStorage.getItem('favs')) })
    }

    renderHelper(){

        return(
            this.state.favs.map( (fav, index) => (
                <Card >
                    <CardTitle title={fav.name} className="clear"/>
                    <div className="text_image_box">
                        <CardMedia className="image" >
                            <img  src={fav.image.medium} />
                        </CardMedia>
                        <CardText className="text">
                            Genres: {fav.genres}
                            <br/>
                            <br/>
                            Description: {fav.summary}
                            <br/>
                            <br/>
                            Status: {fav.status}
                        </CardText>
                        <CardActions className="clear">
                            <RaisedButton label="Remove" onClick={this.handleRemoveFav.bind(this, fav.id)}/>
                            <RaisedButton label="See next episode" onClick={this.handleNextEpisode.bind(this, fav.id)}/>
                        </CardActions>
                    </div>
                    <CardText>

                    </CardText>
                </Card>
            ))


        )

    }

    handleRemoveFav(id, fav){
        store.dispatch(initialize())
        store.dispatch(deleteFav(id, fav));
    }
    nextEpisode(){
        if(this.state.nextepisodeAirDate !=='' || null || undefined){
            return(
                <Aired date={this.state.nextepisodeAirDate} time={this.state.nextepisodeAirTime}/>
            );
        }
    }
    handleNextEpisode(id) {
        let episode = id +"?embed=nextepisode";
        let xhttp = new XMLHttpRequest();
        xhttp.open("GET", "http://api.tvmaze.com/shows/"+episode, true);
        xhttp.onreadystatechange = function(event) {
            if (xhttp.readyState === XMLHttpRequest.DONE)
            {
                let response = JSON.parse(event.target.response);
                this.setState( { nextepisodeAirDate: response._embedded.nextepisode.airdate, nextepisodeAirTime: response._embedded.nextepisode.airtime } )
            }
        }.bind(this);
        xhttp.send();


    }
}
export default ListFav
