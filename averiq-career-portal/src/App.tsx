import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CareerPortal from './pages/CareerPortal';
import './styles/index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CareerPortal />} />
      </Routes>
    </Router>
  );
}

export default App;