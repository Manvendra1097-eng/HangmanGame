import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import PlayGame from './PlayGame';

function PlayGameContainer() {
  const {
    state: { value },
  } = useLocation();

  const [gussedLetters, setGussedLettes] = useState([]);

  const onClickHandler = function (event) {
    const value = event.target.value;
    setGussedLettes([...gussedLetters, value]);
  };

  return (
    <PlayGame
      value={value}
      gussedLetters={gussedLetters}
      onClickHandler={onClickHandler}
    />
  );
}

export default PlayGameContainer;
