import logo from './logo.svg';
import './App.css';
import Congrats from './components/congrats/Congrats';
import GuessdWords from './components/guestWords/GuessedWords';
import Input from './components/input/Input';

function App() {
  //TODO: get props from shared state.
  const success = false;
  const secretWord = 'party';
  const guessedWords = [];


  return (
    <div className='container' data-test='component-app'>
      <h1 >Jotto</h1>
      <Congrats success={success} />
      <Input success={success} secretWord={secretWord} />
      <GuessdWords guessedWords={guessedWords} />
    </div>
  );
}

export default App;
