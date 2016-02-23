var React = require('react');
var BenchStore = require('./stores/bench');

var Map = React.createClass({

  

  componentDidMount: function(){

      var mapDOMNode = document.getElementById('map');
      var mapOptions = {
        center: {lat: 37.7758, lng: -122.435},
        zoom: 13
      };

      this.map = new google.maps.Map(mapDOMNode, mapOptions);

      var marker = new google.maps.Marker({
        position: {lat: 37.7758, lng: -122.435},
        map: this.map,
      });

    },

  render: function() {
    return (
      <div id="map">

      </div>
    );
  }
})


module.exports = Map;
