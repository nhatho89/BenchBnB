var React = require('react');
var Map = require('./Map.jsx');
var Index = require('./bench/benchesIndex.jsx');

var Search = React.createClass({
  render: function() {
    return (
      <div>
        <Map/>
        <Index/>
      </div>
    )
  }
})

module.exports = Search;
