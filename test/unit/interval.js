const assert = require('assert');
const fixtures = require('../fixtures');

describe('IntervalConnection', function() {
    it('can receive interval message', done => {
        fixtures.connection.start(err => {
            assert(!err);
            fixtures.connection.dequeue((err, message) => {
                assert(!err);
                assert(message);

                done();
            });
        });
    });
});
