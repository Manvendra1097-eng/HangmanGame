import TextInputFormContainer from "../components/textinputform/TextInputFormContainer";

function StartGame() {


    return (
        <div className="w-full mt-14 flex flex-col items-center gap-12">
            <h1 className="text-4xl font-bold">Start Game</h1>
            <TextInputFormContainer />
        </div>
    )
}
export default StartGame;