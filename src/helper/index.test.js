import { getLetterMatchCount } from "./index";

describe('getLetterMatchCount', () => {
    const secretWord = 'party';
    test('returns correct count when there are no matching letters', () => {
        const letterMatchCount = getLetterMatchCount('bomb', secretWord)
        expect(letterMatchCount).toBe(0);
    });
    test('return the correct count when there are three matching letters', () => {
        const letterMatchCount = getLetterMatchCount('train', secretWord);
        expect(letterMatchCount).toBe(3);
    });
    test('returns the correct count when there are duplicate letters in the guerss', () => {
        const letterMatchCount = getLetterMatchCount('parka', secretWord);
        expect(letterMatchCount).toBe(3);
    });
})