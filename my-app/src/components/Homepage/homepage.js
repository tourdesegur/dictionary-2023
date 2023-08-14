import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './homepage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faSearch as faSearchSolid } from '@fortawesome/free-solid-svg-icons';


const Homepage = () => {
  const [word, setWord] = useState("");
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmedWord = word.trim();
    if (!trimmedWord || trimmedWord.split(' ').length > 1) return;
    console.log(trimmedWord);
    history.push(`/search/${word}`);
  }

  return (
    <div className="Homepage">
          <h1>
              <span className="title-d">:D</span>
              <span className="title">ictionary</span>
          </h1>
          <div className="box">
            <form onSubmit={handleSubmit}>
            <div className='row-search'>
            <FontAwesomeIcon icon={faSearchSolid} className='search-icon'/>
            <input
              type="text"
              value={word}
              onChange={event => setWord(event.target.value)}
              placeholder="Type a word"
            />
            </div>
            </form>
          </div>    
    </div>
  )
}

export default Homepage