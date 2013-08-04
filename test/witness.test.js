var assert = require('assert');

var Witness = require('../src/witness');

describe( 'Witness', function() {
    var witness = new Witness();

    describe( 'analysesTheory()', function() {
        it( 'should return 0', function() {
            assert.equal( 0, witness.analysesTheory() );
        });
    });
});
