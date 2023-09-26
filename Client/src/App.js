import './App.css';
import LandingPage from './Pages/LandingPage/LandingPage';
import { Route, Routes } from 'react-router-dom';
import Auth from './Pages/Auth/Auth';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path="/signup" element={<Auth />} />
      <Route path="/login"  element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
