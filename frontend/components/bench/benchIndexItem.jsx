var React = require('react');

var BenchIndexItem = React.createClass({


  render: function() {
    return (
      <div>
        {this.props.bench.description + " " + this.props.bench.lat + " " + this.props.bench.lng}
      </div>
    );
  }

});

module.exports = BenchIndexItem;
