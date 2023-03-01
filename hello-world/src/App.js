import './App.css';
import Hello from "./Hello/Hello"
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </div>
  );
}

export default App;
