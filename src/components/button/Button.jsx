import buttonStyle from './ButtonStyle';

function Button({
  text,
  style = 'primary',
  onClickHandler,
  type = 'button',
  ...rest
}) {
  return (
    <button
      onClick={onClickHandler}
      className={`px-4 py-2  ${buttonStyle(style)} text-white`}
      type={type}
      {...rest}
    >
      {text}
    </button>
  );
}

export default Button;
