import eventEmitter from './EventEmitter';

export default class movieClass extends eventEmitter{
  constructor(title, year, duration){
    super();
    this.title = title;
    this.year = year;
    this.duration = duration;
    this.cast =  [];
  }

  play(){
    super.emit(this, 'play');
  }

  pause(){
    super.emit(this, 'pause');
  }

  resume(){
    super.emit(this, 'resume');
  }

  addCast(actors){
    this.cast = this.cast.concat(actors);
  }
}
