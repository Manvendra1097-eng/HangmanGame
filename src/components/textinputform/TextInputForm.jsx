import Button from '../button/Button';
import TextInput from '../textinput/TextInput';

function TextInputForm({
  type,
  handleFormSubmit,
  handleTextInputChange,
  handleShowHideClick,
}) {
  return (
    <form onSubmit={handleFormSubmit} className="space-y-4">
      <div>
        <TextInput
          type={type}
          label="Enter a word or a phrase"
          placeholder="Enter a word or phrase here ..."
          onChangeHandler={handleTextInputChange}
        />
      </div>

      <div className="flex gap-4 justify-center">
        <Button
          style="warning"
          text={type === 'password' ? 'Show' : 'Hide'}
          onClickHandler={handleShowHideClick}
        />
        <Button type="submit" style="success" text="Submit" />
      </div>
    </form>
  );
}

export default TextInputForm;
