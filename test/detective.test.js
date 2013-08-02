var assert = require('assert');

var Detective = require('../src/detective');

describe( 'Detective', function() {
    var detective = new Detective();

    describe( 'providesTheory()', function() {
        it( 'should return a 3 lenght array', function() {
            assert.equal( 3, detective.providesTheory().length );
        });
    });
});
