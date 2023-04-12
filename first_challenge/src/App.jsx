import { Route, Routes} from 'react-router-dom'
import './App.css';
import Password from './components/Password';
import AudioPlayer from './components/AudioPlayer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Password />} />
        <Route path="/audio" element={<AudioPlayer />} />
      </Routes>
    </div>
  );
}

export default App;





