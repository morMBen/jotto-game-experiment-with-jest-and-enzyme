/**
 * @method getLetterMatchCount
 * @param {string} guessedWord 
 * @param {string} secretWord 
 * @returns {number} - Number of lettes matched between guessed word and secret word.
 */
export function getLetterMatchCount(guessedWord, secretWord) {
    const secretLetters = secretWord.split('');
    const guessedLetterSet = new Set(guessedWord);
    return secretLetters.filter(l => guessedLetterSet.has(l)).length;
}