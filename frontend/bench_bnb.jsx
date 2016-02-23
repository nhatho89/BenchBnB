var React = require('react');
var ReactDom = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var hashHistory = require('react-router').hashHistory;

var Search = require('./components/Search.jsx');
var BenchStore = require('./stores/bench.js');
var ApiUtil = require('./utils/api_util.js');
var Index = require('./components/bench/benchesIndex.jsx');
var Map = require('./components/Map.jsx');

var routes = (
  <Route component={Search} path="/">
    <Route component={Index} path="/benches">

    </Route>
  </Route>
);

document.addEventListener("DOMContentLoaded", function() {
  var root = document.querySelector('#content');
  ReactDom.render(<Router history={hashHistory}>{routes}</Router>, root);
});
