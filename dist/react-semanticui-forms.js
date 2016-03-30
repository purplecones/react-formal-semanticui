(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = (window.React);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import ClassGenerator from '../mixins/classGenerator';

// let defaultClassName = 'ui form';

var Form = _react2.default.createClass({
  displayName: 'Form',

  // mixins: [ClassGenerator],

  render: function render() {

    // let {className, ...other} = this.props;

    return _react2.default.createElement(
      'div',
      null,
      'test'
    );
  }
});

exports.default = Form;

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Form = undefined;

var _Form2 = require('./components/Form');

var _Form3 = _interopRequireDefault(_Form2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Form = _Form3.default;

},{"./components/Form":1}]},{},[2]);
