import {eventEmitter} from "./modules/EventEmitter";
import {logger} from "./modules/Logger";
import {movieClass} from "./modules/MovieClass";
import {actor} from "./modules/Actor";

let mylogger = new logger;
let Social = {
  share: function(friendName){
    console.log("share", this.title, "with", friendName);
  },
  like: function(friendName){
    console.log(friendName, "likes", this.title);
  }
}
let terminator = new movieClass('The Terminator', '1984' , '1h 47min');
let godfather = new movieClass('The Godfather', '1972' , '2h 55min');
let taxidriver = new movieClass('Taxi Driver', '1976' , '1h 54m');
let alpacino = new actor('Al Pacino', '70');

godfather.on('play', mylogger.log);
godfather.play();

godfather.on('resume', mylogger.log);
godfather.resume();

godfather.off('play', mylogger.log);
godfather.play();

Object.assign(terminator, Social)
terminator.share('mike');
Object.assign(godfather, Social)
godfather.like('john');

godfather.addCast(alpacino);
console.log(godfather);

let cast = [
  new actor('Diane Keaton', '70'),
  new actor('Robert Duvall' , '80'),
  new actor('Marlon Brando' , '90'),
] ;

godfather.addCast(cast);
console.log(godfather);
