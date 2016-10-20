export default class eventEmitter {
constructor () {
  this.listeners = [];
}

on (event, callback) {
  if(this.listeners[event] != callback){
    this.listeners[event] = callback
  }
}

off (event, callback) {
  for (let i = 0 ; i < this.listeners.length ; i++) {
			if (this.listeners[i] === callback) {
				this.listeners.splice (i,1);
			}
  }
}

emit (movie, event) {
   if(this.listeners[event]) this.listeners[event](movie, event);
 }
}
