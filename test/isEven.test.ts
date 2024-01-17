import { isEven } from "./isEven";

describe('IsEven', () => {
    test('should return true when input is 2', () => {
        expect(isEven(2)).toEqual(true);
    });
    test('should return false when input is 3', () => {
        expect(isEven(3)).toEqual(false)
    });
    test('should return false when input is 0', () => {
        expect(isEven(0)).toEqual(false)
    });
});