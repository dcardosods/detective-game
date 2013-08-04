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

        it( 'theoryEvidences property should return a 3 lenght array', function() {
            assert.equal( 3, detective.theoryEvidences.length );
        });
    });

    describe( 'processWitnessAnswer()', function() {
        var suspectsLength = detective.crimeEvidences.suspects.length;
        it( 'should return less one suspect from evidences', function() {
            detective.processWitnessAnswer( 1 );
            assert.equal( suspectsLength - 1, detective.crimeEvidences.suspects.length );
        });

        var localsLength = detective.crimeEvidences.locals.length;
        it( 'should return less one local from evidences', function() {
            detective.processWitnessAnswer( 2 );
            assert.equal( localsLength - 1, detective.crimeEvidences.locals.length );
        });

        var gunsLength = detective.crimeEvidences.guns.length;
        it( 'should return less one gun from evidences', function() {
            detective.processWitnessAnswer( 3 );
            assert.equal( gunsLength - 1, detective.crimeEvidences.guns.length );
        });

        it( 'should evidences not contains the the previous provided theory values', function() {
            assert.equal( -1, detective.crimeEvidences.suspects.indexOf(
                detective.theoryEvidences[ 0 ] ) );
            assert.equal( -1, detective.crimeEvidences.locals.indexOf(
                detective.theoryEvidences[ 1 ] ) );
            assert.equal( -1, detective.crimeEvidences.guns.indexOf(
                detective.theoryEvidences[ 2 ] ) );
        });
    });
});
