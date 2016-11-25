import {addFav, deleteFav, initialize} from '../applications/actions';
import Center from './center';
import CastAndCrew from './castAndCrew';
import Header from './header';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import store from '../applications/store';
import React from 'react';

injectTapEventPlugin();

class Series extends React.Component{
    constructor() {
        super();
        this.state = { serie:[],
                      cast:[],
                      person:[]
                    };
        this.renderIf = this.renderIf.bind(this);
        this.seriesSearch = this.seriesSearch.bind(this);
        this.castSearch = this.castSearch.bind(this);
        this.personSearch = this.personSearch.bind(this);
    }

    render() {
        return (
            <MuiThemeProvider>
                <div>
                <Header seriesSearch={this.seriesSearch} / >
                {this.renderIf()}
                </div>
            </MuiThemeProvider>

        )
    }

    renderIf(){
      let renderIF = null;
      let idCast = this.props.params.idCast;
      let idPerson = this.props.params.idPerson;
      if (idCast)
      {
        {this.castSearch(idCast)};
         renderIF = (<div> <CastAndCrew cast={this.state.cast} /> </div>);
      }
      else if (idPerson){
        {this.personSearch(idPerson)};
        renderIF = (<div> <Center person={this.state.person} /> </div>);
      }
      else{
         renderIF= (<div> <Center serie={this.state.serie}/></div>);
      }

      return renderIF;
    }

    seriesSearch(search) {
        let xhttp = new XMLHttpRequest();
        xhttp.open("GET", "http://api.tvmaze.com/search/shows?q="+search, true);
        xhttp.onreadystatechange = function(event) {
            if (xhttp.readyState === XMLHttpRequest.DONE)
            {
                let response = JSON.parse(event.target.response);
                this.setState( { serie: response } )
            }
        }.bind(this);
        xhttp.send();
    }
    castSearch(id) {
        let xhttp = new XMLHttpRequest();
        let idCast = id +"/cast";
        xhttp.open("GET", 'http://api.tvmaze.com/shows/'+idCast, true);
        xhttp.onreadystatechange = function(event) {
            if (xhttp.readyState === XMLHttpRequest.DONE)
            {
                let response = JSON.parse(event.target.response);
                this.setState( { cast: response } )
            }
        }.bind(this);
        xhttp.send();
    }
    personSearch(id) {
        let xhttp = new XMLHttpRequest();
        let idPerson = id +"/castcredits?embed=show";
        xhttp.open("GET", 'http://api.tvmaze.com/people/'+idPerson, true);
        xhttp.onreadystatechange = function(event) {
            if (xhttp.readyState === XMLHttpRequest.DONE)
            {
                let response = JSON.parse(event.target.response);
                this.setState( { person: response } )
            }
        }.bind(this);
        xhttp.send();
    }
}


export default Series
