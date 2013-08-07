var assert = require('assert');
var fs = require('fs');

var Crime = require('../src/crime');
var Detective = require('../src/detective');

describe( 'Detective', function() {
    var crime = new Crime(
        JSON.parse( fs.readFileSync( __dirname + '/../data/data.json', 'utf8' ) ),
        JSON.parse( fs.readFileSync( __dirname + '/../data/response.json', 'utf8' ) ).responses[0]
    );
    var detective = new Detective( crime );
    var detective1 = new Detective( crime );

    detective1.checkedEvidences = {
        suspects: [
            "Charles B. Abbage",
            "Donald Duck Knuth",
            "Ada L. Ovelace",
            "Alan T. Uring",
            "Ivar J. Acobson"
        ],
        locals: [
            "Redmond",
            "Palo Alto",
            "San Francisco",
            "Tokio",
            "Restaurante no Fim do Universo",
            "São Paulo",
            "Cupertino",
            "Helsinki",
            "Maida Vale"
        ],
        guns: [
            "Peixeira",
            "DynaTAC 8000X",
            "Trezoitão",
            "Trebuchet",
            "Maça"
        ]
    };

    describe( 'providesTheory()', function() {
        it( 'should return [6, 10, 6]', function() {
            assert.deepEqual( [ 6, 10, 6 ], detective1.providesTheory() );
        });

        it( 'should return a 3 lenght array', function() {
            assert.equal( 3, detective.providesTheory().length );
        });

        it( 'theoryEvidences property should return a 3 lenght array', function() {
            assert.equal( 3, detective.theoryEvidences.length );
        });
    });

    describe( 'processWitnessAnswer()', function() {
        it( 'should return less one suspect from evidences', function() {
            detective.processWitnessAnswer( 1 );
            assert.equal( 1, detective.checkedEvidences.suspects.length );
        });

        it( 'should return less one local from evidences', function() {
            detective.processWitnessAnswer( 2 );
            assert.equal( 1, detective.checkedEvidences.locals.length );
        });

        it( 'should return less one gun from evidences', function() {
            detective.processWitnessAnswer( 3 );
            assert.equal( 1, detective.checkedEvidences.guns.length );
        });

        it( 'should checked evidences contains the previous provided theory values', function() {
            assert.notEqual( -1, detective.checkedEvidences.suspects.indexOf(
                detective.theoryEvidences[ 0 ] ) );
            assert.notEqual( -1, detective.checkedEvidences.locals.indexOf(
                detective.theoryEvidences[ 1 ] ) );
            assert.notEqual( -1, detective.checkedEvidences.guns.indexOf(
                detective.theoryEvidences[ 2 ] ) );
        });
    });
});
