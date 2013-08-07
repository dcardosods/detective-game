function Witness( crime ) {
    this.crimeEvidences = crime.evidences;
    this.crimeSolution = crime.solution;
};

Witness.prototype.analysesTheory = function( theory ) {
    var possibleReturns = [];
    if ( theory[0] - 1 !== this.crimeEvidences.suspects.indexOf( this.crimeSolution.suspect ) ) {
        possibleReturns.push( 1 );
    }
    if ( theory[1] - 1 !== this.crimeEvidences.locals.indexOf( this.crimeSolution.local ) ) {
        possibleReturns.push( 2 );
    }
    if ( theory[2] - 1 !== this.crimeEvidences.guns.indexOf( this.crimeSolution.gun ) ) {
        possibleReturns.push( 3 );
    }

    if ( possibleReturns.length === 0 ) {
        return 0;
    }
    else {
        return possibleReturns[ Math.floor( Math.random() * possibleReturns.length ) ];
    }
};

module.exports = Witness;