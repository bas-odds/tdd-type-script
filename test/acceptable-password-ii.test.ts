// ttd life cycle  red -> green -> refactor

import {AcceptablePassword} from "./acceptable-password-ii";

describe('Acceptable password', () => {

    let acceptablePassword: AcceptablePassword;
    beforeEach(() => {
        acceptablePassword = new AcceptablePassword();
    });

    test('should init class Acceptable Password', () => {
        expect(acceptablePassword).toBeInstanceOf(AcceptablePassword);
    });

    test('should return true when the password length should be bigger than 6', () => {
        const result = acceptablePassword.validatePassword('password2');
        expect(result).toBeTruthy();
    });

    test('should return false when the password length should be less than 6', () => {
        const result = acceptablePassword.validatePassword('word2');
        expect(result).toBeFalsy();
    });

});
