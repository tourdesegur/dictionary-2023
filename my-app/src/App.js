
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './components/Homepage/homepage';
import Bookmark from './components/Bookmark/bookmark';
import Definition from './components/Definition/definition';

function App() {
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route path="/Bookmark" element={<Bookmark />} />
      <Route path="/search/:word" element={<Definition />} />
      </Routes>
    </Router>
    
  );
}

export default App;
