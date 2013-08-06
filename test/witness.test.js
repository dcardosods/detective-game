var assert = require('assert');
var fs = require('fs');

var Crime = require('../src/crime');
var Witness = require('../src/witness');

describe( 'Witness', function() {
    var crime = new Crime(
        JSON.parse( fs.readFileSync( __dirname + '/../data/data.json', 'utf8' ) ),
        JSON.parse( fs.readFileSync( __dirname + '/../data/response.json', 'utf8' ) )
    );
    var witness = new Witness( crime );

    describe( 'analysesTheory()', function() {
        var theory = [ 2, 4, 3 ];
        it( 'should return 0', function() {
            assert.equal( 0, witness.analysesTheory( theory ) );
        });
    });
});
