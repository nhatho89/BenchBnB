var React = require('react');
var BenchStore = require('../../stores/bench.js');
var ApiUtil = require('../../utils/api_util.js');
var BenchIndexItem = require('./benchIndexItem.jsx')


var BenchIndex = React.createClass({
  getInitialState: function() {
    return (
      {benches: BenchStore.all()}
    );
  },

  componentDidMount: function() {
    this.storeListener = BenchStore.addListener(this._onChange);
    ApiUtil.fetchAllBenches();
  },

  componentWillUnmount: function() {
    this.storeListener.remove();
  },

  _onChange: function() {
    this.setState({benches: BenchStore.all()});
  },

  benchesIndexList: function() {
    var benchesComponents = this.state.benches.map(function(bench) {
      return <BenchIndexItem key={bench.id} bench={bench} />;
    });

    return benchesComponents;
  },

  render: function() {

    return (
      <div>
        {this.benchesIndexList()}
      </div>
    );
  }
})


module.exports = BenchIndex;
