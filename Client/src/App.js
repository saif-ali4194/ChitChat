import './App.css';
import LandingPage from './Pages/LandingPage/LandingPage';
import { Route, Routes } from 'react-router-dom';
import Auth from './Pages/Auth/Auth';
import HomePage from './Pages/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path="/signup" element={<Auth />} />
        <Route path="/login"  element={<Auth />} />
        <Route path="/home" element={<HomePage />}/>
        <Route path="/community" element={<HomePage />}/>
        <Route path="/settings" element={<HomePage />}/>
      </Routes>
    </div>
  );
}

export default App;
