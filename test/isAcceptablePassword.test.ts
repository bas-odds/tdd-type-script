import { isAcceptablePassword } from "./isAcceptablePassword";

describe('isAcceptablePassword', ()=> {
    test('should return false when input short', ()=> {
        expect(isAcceptablePassword('short')).toEqual(false);
    });
    test('should return false when input muchlonger', ()=> {
        expect(isAcceptablePassword('muchlonger')).toEqual(true);
    });
});