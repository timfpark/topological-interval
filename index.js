const DirectConnection = require('topological-direct');

class IntervalConnection extends DirectConnection {
    constructor(config) {
        super(config);

        this.config.interval = this.config.interval || 60 * 60 * 1000;
    }

    start(callback) {
        super.start(err => {
            if (err) return callback(err);

            setInterval(() => {
                this.enqueue([{
                    body: {
                        intervalStart: Date.now()
                    }
                }], err => {
                    console.log('error enqueuing interval message: ' + err);
                });
            }, this.config.interval);

            return callback();
        });
    }
}

module.exports = IntervalConnection;
