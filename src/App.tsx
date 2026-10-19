import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import CoverPage from './pages/cover-page/CoverPage';
import Desktop from './pages/desktop/Desktop';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CoverPage />} />
        <Route path="/desktop" element={<Desktop />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
