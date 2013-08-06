function Witness( crime ) {
    this.crimeEvidences = crime.evidences;
    this.crimeSolution = crime.solution;
};

Witness.prototype.analysesTheory = function( theory ) {
    if ( theory[0] - 1 !== this.crimeEvidences.suspects.indexOf( this.crimeSolution.suspect ) ) {
        return 1;
    }
    if ( theory[1] - 1 !== this.crimeEvidences.locals.indexOf( this.crimeSolution.local ) ) {
        return 2;
    }
    if ( theory[2] - 1 !== this.crimeEvidences.guns.indexOf( this.crimeSolution.gun ) ) {
        return 3;
    }
    return 0;
};

module.exports = Witness;