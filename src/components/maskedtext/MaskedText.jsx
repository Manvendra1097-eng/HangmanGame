import { getMaskedText } from './MaskedTextUtil';

function MaskedText({ text, gussedTexts }) {
  const maskedTextArr = getMaskedText(text, gussedTexts);

  return (
    <div className="text-center">
      {maskedTextArr.map((maskedTxt, idx) => (
        <span
          key={`text-${idx}`}
          className="mx-1 text-4xl text-gray-800 font-semibold"
        >
          {maskedTxt}
        </span>
      ))}
    </div>
  );
}

export default MaskedText;
