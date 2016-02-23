var React = require('react');

var Map = React.createClass({

  componentWillUnmount: function() {
    this.storeListener.remove();
  },

  _onChange: function() {
    this.setState({benches: BenchStore.all()});
  },

  componentDidMount: function(){
    this.storeListener = BenchStore.addListener(this._onChange);
    ApiUtil.fetchAllBenches();
      var mapDOMNode = document.getElementById('map');
      var mapOptions = {
        center: {lat: 37.7758, lng: -122.435},
        zoom: 13
      };
      this.map = new google.maps.Map(mapDOMNode, mapOptions);
    },

  render: function() {
    return (
      <div id="map">

      </div>
    );
  }
})


module.exports = Map;
