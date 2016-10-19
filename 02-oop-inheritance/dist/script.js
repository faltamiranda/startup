(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var actor = function actor(name, age) {
  _classCallCheck(this, actor);

  this.name = name;
  this.age = age;
};

exports.actor = actor;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var eventEmitter = function () {
  function eventEmitter() {
    _classCallCheck(this, eventEmitter);

    this.listeners = [];
  }

  _createClass(eventEmitter, [{
    key: "on",
    value: function on(event, callback) {
      if (this.listeners[event] != callback) {
        this.listeners[event] = callback;
      }
    }
  }, {
    key: "off",
    value: function off(event, callback) {
      if (this.listeners[event]) this.listeners[event] = undefined;
    }
  }, {
    key: "emit",
    value: function emit(movie, event) {
      if (this.listeners[event]) this.listeners[event](movie, event);
    }
  }]);

  return eventEmitter;
}();

exports.eventEmitter = eventEmitter;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var logger = function () {
  function logger() {
    _classCallCheck(this, logger);
  }

  _createClass(logger, [{
    key: 'log',
    value: function log(info, functionName) {
      console.log(info.title + ' ' + functionName);
    }
  }]);

  return logger;
}();

exports.logger = logger;

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.movieClass = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _EventEmitter = require('./EventEmitter');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var movieClass = function (_eventEmitter) {
  _inherits(movieClass, _eventEmitter);

  function movieClass(title, year, duration) {
    _classCallCheck(this, movieClass);

    var _this = _possibleConstructorReturn(this, (movieClass.__proto__ || Object.getPrototypeOf(movieClass)).call(this));

    _this.title = title;
    _this.year = year;
    _this.duration = duration;
    _this.cast = [];
    return _this;
  }

  _createClass(movieClass, [{
    key: 'play',
    value: function play() {
      _get(movieClass.prototype.__proto__ || Object.getPrototypeOf(movieClass.prototype), 'emit', this).call(this, this, 'play');
    }
  }, {
    key: 'pause',
    value: function pause() {
      _get(movieClass.prototype.__proto__ || Object.getPrototypeOf(movieClass.prototype), 'emit', this).call(this, this, 'pause');
    }
  }, {
    key: 'resume',
    value: function resume() {
      _get(movieClass.prototype.__proto__ || Object.getPrototypeOf(movieClass.prototype), 'emit', this).call(this, this, 'resume');
    }
  }, {
    key: 'addCast',
    value: function addCast(actors) {
      this.cast = this.cast.concat(actors);
    }
  }]);

  return movieClass;
}(_EventEmitter.eventEmitter);

exports.movieClass = movieClass;

},{"./EventEmitter":2}],5:[function(require,module,exports){
"use strict";

var _EventEmitter = require("./modules/EventEmitter");

var _Logger = require("./modules/Logger");

var _MovieClass = require("./modules/MovieClass");

var _Actor = require("./modules/Actor");

var mylogger = new _Logger.logger();
var Social = {
  share: function share(friendName) {
    console.log("share", this.title, "with", friendName);
  },
  like: function like(friendName) {
    console.log(friendName, "likes", this.title);
  }
};
var terminator = new _MovieClass.movieClass('The Terminator', '1984', '1h 47min');
var godfather = new _MovieClass.movieClass('The Godfather', '1972', '2h 55min');
var taxidriver = new _MovieClass.movieClass('Taxi Driver', '1976', '1h 54m');
var alpacino = new _Actor.actor('Al Pacino', '70');

godfather.on('play', mylogger.log);
godfather.play();

godfather.on('resume', mylogger.log);
godfather.resume();

godfather.off('play', mylogger.log);
godfather.play();

Object.assign(terminator, Social);
terminator.share('mike');
Object.assign(godfather, Social);
godfather.like('john');

godfather.addCast(alpacino);
console.log(godfather);

var cast = [new _Actor.actor('Diane Keaton', '70'), new _Actor.actor('Robert Duvall', '80'), new _Actor.actor('Marlon Brando', '90')];

godfather.addCast(cast);
console.log(godfather);

},{"./modules/Actor":1,"./modules/EventEmitter":2,"./modules/Logger":3,"./modules/MovieClass":4}]},{},[5]);
