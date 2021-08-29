import propTypes from 'prop-types';
import { useState } from 'react';
const Input = ({ secretWord }) => {
    const [currentGuess, setCurrentGuess] = useState('');
    return (
        <div data-test='input-container'>
            <form className='form-inline'>
                <input
                    data-test='input-box'
                    className='mb-2 mx-sm-3'
                    type='text'
                    placeholder='enter guess'
                    value={currentGuess}
                    onChange={e => setCurrentGuess(e.target.value)}
                ></input>
                <button
                    data-test='submit-button'
                    className='btn btn-primary mb-2'
                    onClick={(n) => {
                        n.preventDefault();
                        setCurrentGuess('');
                    }}
                >
                </button>
            </form>
        </div>
    )
}

Input.propTypes = {
    secretWord: propTypes.string.isRequired,
}
export default Input;