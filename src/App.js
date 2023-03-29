import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import './App.css';

function App() {
  return (
    <main className="app">
      <Routes>
        <Route path="/">
          <Route index element={<LandingPage />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
