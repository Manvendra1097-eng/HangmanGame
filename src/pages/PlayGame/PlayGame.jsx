import { Link } from 'react-router-dom';
import LetterButtons from '../../components/letterbuttons/LetterButtons';
import MaskedText from '../../components/maskedtext/MaskedText';

function PlayGame({ value, gussedLetters, onClickHandler }) {
  return (
    <div>
      <h1>Play Game {value}</h1>

      <MaskedText text={value} gussedTexts={gussedLetters} />

      <LetterButtons
        text={value}
        gussedTexts={gussedLetters}
        onClickHandler={onClickHandler}
      />

      <Link to="/start" className="text-blue-500">
        {' '}
        Start Game Link
      </Link>
    </div>
  );
}

export default PlayGame;
