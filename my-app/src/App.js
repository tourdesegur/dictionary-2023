
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './components/Homepage/homepage';
import Bookmark from './components/Bookmark/bookmark';
import Definition from './components/Definition/definition';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/" element={<Bookmark />} />
      <Route path="/" element={<Definition />} />
      </Routes>
    </Router>
    
  );
}

export default App;
