import { getMaskedText } from './MaskedTextUtil';

function MaskedText({ text, gussedTexts }) {
  const maskedTextArr = getMaskedText(text, gussedTexts);

  return (
    <div>
      {maskedTextArr.map((maskedTxt, idx) => (
        <span key={`text-${idx}`} className="mx-1 text-lg text-gray-800">
          {maskedTxt}
        </span>
      ))}
    </div>
  );
}

export default MaskedText;
