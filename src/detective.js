function Detective( crime ) {
    this.crimeEvidences = crime.evidences;
};

Detective.prototype.providesTheory = function() {
    return [ Math.floor( Math.random() * this.crimeEvidences.suspects.length ),
        Math.floor( Math.random() * this.crimeEvidences.locals.length ),
        Math.floor( Math.random() * this.crimeEvidences.guns.length ) ];
};

Detective.prototype.processWitnessAnswer = function( answer ) {
    if ( answer === 1 ) {
        this.crimeEvidences.suspects.splice( 0, 1 );
    }
    else if ( answer === 2 ) {
        this.crimeEvidences.locals.splice( 0, 1 );
    }
    else if ( answer === 3 ) {
        this.crimeEvidences.guns.splice( 0, 1 );
    }
};

module.exports = Detective;