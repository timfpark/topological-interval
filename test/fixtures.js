const IntervalConnection = require('../index');

module.exports = {
     connection: new IntervalConnection({
          id: "intervalConnection",
          config: {
              interval: 1 * 1000, // 1 second
          }
     })
};
