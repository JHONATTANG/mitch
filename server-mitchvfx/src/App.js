import logo from './logo.svg';
import './App.css';
import Video from './components/background/Video';

function App() {
  return (
    <>
      <Video />
      <div style={{ position: "relative", zIndex: 1 }}>
        <h1>Mi página con video de fondo</h1>
      </div>
    </>
  );
}

export default App;
