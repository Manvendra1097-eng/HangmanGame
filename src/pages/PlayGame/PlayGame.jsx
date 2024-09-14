import { Link } from 'react-router-dom';
import LetterButtons from '../../components/letterbuttons/LetterButtons';
import MaskedText from '../../components/maskedtext/MaskedText';
import HangMan from '../../components/hangman/HangMan';

function PlayGame({ value, gussedLetters, onClickHandler, step }) {
  return (
    <div className="h-screen">
      <h1 className="text-center my-6  text-4xl font-bold text-gray-500 text-stroke-3">
        Play Game
      </h1>
      <div className="flex items-center gap-20 w-10/12 mx-auto h-4/5">
        <div className="w-1/2 h-full flex flex-col justify-center gap-8 border-r-2">
          <MaskedText text={value} gussedTexts={gussedLetters} />

          <LetterButtons
            text={value}
            gussedTexts={gussedLetters}
            onClickHandler={onClickHandler}
            step={step}
          />

          <Link
            to="/start"
            className="text-gray-50 px-3 py-1 mx-auto border bg-slate-500 w-fit hover:bg-slate-600 hover:text-gray-100  transition-all"
          >
            {' '}
            Start Game
          </Link>
        </div>
        <div className="w-1/2">
          <HangMan step={step} />
        </div>
      </div>
    </div>
  );
}

export default PlayGame;
