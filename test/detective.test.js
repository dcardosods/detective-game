var assert = require('assert');
var fs = require('fs');

var Crime = require('../src/crime');
var Detective = require('../src/detective');

describe( 'Detective', function() {
    var crime = new Crime( JSON.parse(
        fs.readFileSync( __dirname + '/../data/data.json', 'utf8' ) ) );
    var detective = new Detective( crime );

    describe( 'providesTheory()', function() {
        it( 'should return a 3 lenght array', function() {
            assert.equal( 3, detective.providesTheory().length );
        });
    });
});
