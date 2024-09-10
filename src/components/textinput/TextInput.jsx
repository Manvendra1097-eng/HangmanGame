const TextInput = ({ label, onChangeHandler, placeholder, type }) => {
  return (
    <label>
      <span className=" text-gray-700 text-sm font-bold mb-2">{label}</span>
      <input
        type={type}
        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        onChange={onChangeHandler}
        placeholder={placeholder}
      />
    </label>
  );
};

export default TextInput;
