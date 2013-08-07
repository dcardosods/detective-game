function Detective( crime ) {
    this.crimeEvidences = crime.evidences;
    this.theoryEvidences = [];
    this.checkedEvidences = {
        suspects: [],
        locals: [],
        guns: []
    };
};

Detective.prototype.providesTheory = function() {
    var suspectIndex = Math.floor( Math.random() * this.crimeEvidences.suspects.length );
    while ( this.checkedEvidences.suspects.indexOf(
        this.crimeEvidences.suspects[ suspectIndex ] ) !== - 1 ) {
        suspectIndex = Math.floor( Math.random() * this.crimeEvidences.suspects.length );
    }

    var localIndex = Math.floor( Math.random() * this.crimeEvidences.locals.length );
    while ( this.checkedEvidences.locals.indexOf(
        this.crimeEvidences.locals[ localIndex ] ) !== - 1 ) {
        localIndex = Math.floor( Math.random() * this.crimeEvidences.locals.length );
    }

    var gunIndex = Math.floor( Math.random() * this.crimeEvidences.guns.length );
    while ( this.checkedEvidences.guns.indexOf(
        this.crimeEvidences.guns[ gunIndex ] ) !== - 1 ) {
        gunIndex = Math.floor( Math.random() * this.crimeEvidences.guns.length );
    }

    this.theoryEvidences = [ this.crimeEvidences.suspects[ suspectIndex ],
        this.crimeEvidences.locals[ localIndex ],
        this.crimeEvidences.guns[ gunIndex ] ];

    return [ suspectIndex + 1, localIndex + 1, gunIndex + 1 ];
};

Detective.prototype.processWitnessAnswer = function( answer ) {
    if ( answer === 1 ) {
        this.checkedEvidences.suspects.push( this.theoryEvidences[ 0 ] );
    }
    else if ( answer === 2 ) {
        this.checkedEvidences.locals.push( this.theoryEvidences[ 1 ] );
    }
    else if ( answer === 3 ) {
        this.checkedEvidences.guns.push( this.theoryEvidences[ 2 ] );
    }

    return answer;
};

module.exports = Detective;