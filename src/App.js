import logo from './logo.svg';
import './App.css';
import Congrats from './components/congrats/Congrats';
import GuessdWords from './components/guestWords/GuessedWords';

function App() {
  return (
    <div className='container'>
      <h1 >Jotto</h1>
      <Congrats success={true} />
      <GuessdWords guessedWords={[{ guessedWord: 'train', letterMatchCount: 3 }]} />
    </div>
  );
}

export default App;
