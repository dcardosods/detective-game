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

console.log('O empresário Bill G. Ates foi assassinado e o corpo dele foi deixado na frente da delegacia de polícia.\nO detetive Lin Ust Orvalds foi escolhido para investigar este caso.');
console.log('Uma testemunha foi encontrada, mas ela só consegue responder se o detetive Lin Ust Orvalds fornecer uma teoria.');

var theory;
var result;
var counter = 0;
do {
    console.log( '\n\nTeoria nº ' + ++counter + ':' );
    theory = detective.providesTheory();
    console.log( theory + ', ou seja: O assassino foi "' +
        detective.crimeEvidences.suspects[ theory[ 0 ] - 1 ] + '", o local do crime foi "' +
        detective.crimeEvidences.locals[ theory[ 1 ] - 1 ] + '"" e a arma usada foi "' +
        detective.crimeEvidences.guns[ theory[ 2 ] - 1 ] + '".\n');

    result = detective.processWitnessAnswer(  witness.analysesTheory( theory ) );
    console.log('Resposta da testemunha:')
    if ( result !== 0 ) {
        console.log( result + '. Errado! ' + ( ( result === 1 ? 'O assasino' : '' ) ||
            ( result === 2 ? 'O local' : '' ) || ( result === 3 ? 'A arma' : '' ) ) +
            ' está incorret' + ( result === 3 ? 'a' : 'o' ) + '.' );
    }
    else {
        console.log( result + '. Voce está correto!!! Desvendou o assassinato.');
    }

} while ( result !== 0 );