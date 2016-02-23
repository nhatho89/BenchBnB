var ApiActions = require('../actions/api_actions.js');

var ApiUtil = {
  fetchAllBenches: function() {
    $.ajax({
      url: 'api/benches',
      success: function(allBenches) {
        ApiActions.receiveAllBenches(allBenches);
      }
    })
  }
}

window.ApiUtil = ApiUtil;
module.exports = ApiUtil;
