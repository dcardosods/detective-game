function Detective( crime ) {
    this.crimeEvidences = crime.evidences;
    this.theoryEvidences = [];
};

Detective.prototype.providesTheory = function() {
    var suspectIndex = Math.floor( Math.random() * this.crimeEvidences.suspects.length );
    var localIndex = Math.floor( Math.random() * this.crimeEvidences.locals.length );
    var gunIndex = Math.floor( Math.random() * this.crimeEvidences.guns.length );

    this.theoryEvidences = [ this.crimeEvidences.suspects[ suspectIndex ],
        this.crimeEvidences.locals[ localIndex ],
        this.crimeEvidences.guns[ gunIndex ] ];

    return [ suspectIndex, localIndex, gunIndex ];
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