import { Link, Route, Routes } from 'react-router-dom';
import PlayGameContainer from './pages/PlayGame/PlayGameContainer';
import StartGame from './pages/StartGame';

function App() {
  return (
    <Routes>
      <Route path="/start" element={<StartGame />} />
      <Route path="/play" element={<PlayGameContainer />} />
      <Route
        path="/"
        element={
          <div className="h-screen w-full  flex items-center justify-center">
            <Link
              to="/start"
              className="px-4 py-2 rounded-md bg-blue-400 text-white uppercase font-semibold"
            >
              Start
            </Link>
          </div>
        }
      />
    </Routes>
  );
}

export default App;
