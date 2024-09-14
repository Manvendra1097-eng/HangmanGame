const ALPHABETS = 'QWERTYUIOPASDFGHJKLZXCVBNM'.split('');

const LetterButtons = ({ text, gussedTexts, onClickHandler, step }) => {
  const originalTexts = new Set(text.toUpperCase().split(''));

  const guessedTextSet = new Set(gussedTexts.map((el) => el.toUpperCase()));

  const btnStyle = function (letter) {
    if (guessedTextSet.has(letter)) {
      return originalTexts.has(letter) ? 'bg-green-500' : 'bg-red-500';
    } else return 'bg-blue-500';
  };

  return (
    <div className="flex flex-wrap justify-center">
      {ALPHABETS.map((el) => (
        <button
          key={`btn-${el}`}
          className={`w-12 h-12 m-1 text-white rounded-md ${btnStyle(
            el
          )} opacity-90 hover:opacity-100 transition-opacity`}
          onClick={onClickHandler}
          value={el}
          disabled={guessedTextSet.has(el) || step >= 7}
        >
          {el}
        </button>
      ))}
    </div>
  );
};

export default LetterButtons;
