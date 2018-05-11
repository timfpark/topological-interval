const DirectConnection = require('topological-direct');

class IntervalConnection extends DirectConnection {
    constructor(config) {
        super(config);

        this.config.interval = this.config.interval || 60 * 60 * 1000;
    }

    sendIntervalMessage() {
        this.enqueue(
            [
                {
                    body: {
                        intervalStart: Date.now()
                    }
                }
            ],
            err => {
                if (err)
                    return console.log(
                        'Error sending interval message: ' + err
                    );
            }
        );
    }

    start(callback) {
        super.start(err => {
            if (err) return callback(err);

            this.sendIntervalMessage();

            setInterval(() => {
                this.sendIntervalMessage();
            }, this.config.interval);

            return callback();
        });
    }
}

module.exports = IntervalConnection;
