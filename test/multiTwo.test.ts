import {multiTwo} from "./multiTwo";

describe('multiTwo', () => {
    test('should return 4 when 2 multiply 2', () => {
        expect(multiTwo(2, 2)).toEqual(4);
    });

    test('should return 6 when 3 multiply 2', () => {
        expect(multiTwo(3, 2)).toEqual(6);
    });

    test('should return 8 when 4 multiply 2', () => {
        expect(multiTwo(4, 2)).toEqual(8);
    });
});