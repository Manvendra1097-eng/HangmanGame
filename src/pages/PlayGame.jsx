import { Link, useLocation } from "react-router-dom";

function PlayGame() {


    const { state: { value } } = useLocation();

    console.log("Value passed :::: ", value)

    return (
        <div>
            <h1>Play Game</h1>
            <Link to="/start" className="text-blue-500"> Start Game Link</Link>
        </div>
    )
}

export default PlayGame;