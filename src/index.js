var fs = require('fs');

var Crime = require('./crime');
var Detective = require('./detective');
var Witness = require('./witness');

var crime = new Crime(
    JSON.parse( fs.readFileSync( __dirname + '/../data/data.json', 'utf8' ) ),
    JSON.parse( fs.readFileSync( __dirname + '/../data/response.json', 'utf8' ) ).responses[0]
);
var detective = new Detective( crime );
var witness = new Witness( crime );

var theory;
var result;
do {
    theory = detective.providesTheory();
    console.log( theory );

    result = detective.processWitnessAnswer(  witness.analysesTheory( theory ) );
    console.log( result );

} while ( result !== 0 );