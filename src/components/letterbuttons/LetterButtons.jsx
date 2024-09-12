const ALPHABETS = 'QWERTYUIOPASDFGHJKLZXCVBNM'.split('');

const LetterButtons = ({ text, gussedTexts, onClickHandler }) => {
  const originalTexts = new Set(text.toUpperCase().split(''));

  const guessedTextSet = new Set(gussedTexts.map((el) => el.toUpperCase()));

  const btnStyle = function (letter) {
    if (guessedTextSet.has(letter)) {
      return originalTexts.has(letter) ? 'bg-green-500' : 'bg-red-500';
    } else return 'bg-blue-500';
  };

  return (
    <div>
      {ALPHABETS.map((el) => (
        <button
          key={`btn-${el}`}
          className={`w-12 h-12 m-1 text-white rounded-md ${btnStyle(el)}`}
          onClick={onClickHandler}
          value={el}
          disabled={guessedTextSet.has(el)}
        >
          {el}
        </button>
      ))}
    </div>
  );
};

export default LetterButtons;
