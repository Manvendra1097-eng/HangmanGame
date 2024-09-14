import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PlayGame from './PlayGame';

function PlayGameContainer() {
  const {
    state: { value },
  } = useLocation();

  const [gussedLetters, setGussedLetters] = useState([]);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const { key } = event;

      if (key.length === 1 && key.match(/[a-zA-Z]/) && step <= 7) {
        console.log('step ', step);
        if (value?.toUpperCase().includes(key.toUpperCase())) {
          console.log('correct useEffect');
        } else {
          setStep((prev) => prev + 1);
        }
        setGussedLetters((prevLetters) => [...prevLetters, key]);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [value, step]);

  const onClickHandler = function (event) {
    const letter = event.target.value;
    if (value?.toUpperCase().includes(letter)) {
      console.log('correct');
    } else {
      setStep((prev) => prev + 1);
    }
    setGussedLetters([...gussedLetters, letter]);
  };

  return (
    <PlayGame
      value={value}
      gussedLetters={gussedLetters}
      onClickHandler={onClickHandler}
      step={step}
    />
  );
}

export default PlayGameContainer;
