import propTypes from 'prop-types';
const Input = ({ secretWord }) => {

    return (
        <div data-test='input-container'></div>
    )
}

Input.propTypes = {
    secretWord: propTypes.string.isRequired,
}
export default Input;