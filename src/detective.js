function Detective( crime ) {
    this.crimeEvidences = crime.evidences;
};

Detective.prototype.providesTheory = function() {
    return [ Math.floor( Math.random() * this.crimeEvidences.suspects.length ),
        Math.floor( Math.random() * this.crimeEvidences.locals.length ),
        Math.floor( Math.random() * this.crimeEvidences.guns.length ) ];
};

module.exports = Detective;