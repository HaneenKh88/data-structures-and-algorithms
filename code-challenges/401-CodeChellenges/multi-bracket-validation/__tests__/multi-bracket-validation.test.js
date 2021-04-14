'use strict';

const multiBracketValidation = require('../multi-bracket-validation');

describe('multi Bracket Validation', () => {
    it('Can successfully return True', () => {

        expect(multiBracketValidation('{}(){}')).toBeTruthy();
        expect(multiBracketValidation('()[[Extra Characters]]')).toBeTruthy();
        expect(multiBracketValidation('{}{Code}[Fellows](())')).toBeTruthy();

    });

    it('Can successfully return False', () => {

        expect(multiBracketValidation('[({}]')).toBeFalsy();
        expect(multiBracketValidation('(](')).toBeFalsy();

    });

    it('Can successfully return False when the string empty', () => {

        expect(multiBracketValidation('')).toBeFalsy();
    });
});