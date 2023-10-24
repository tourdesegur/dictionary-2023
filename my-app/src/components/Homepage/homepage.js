import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './homepage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faToggleOn, faBookmark } from '@fortawesome/free-solid-svg-icons';

const Homepage = () => {
  const [word, setWord] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmedWord = word.trim().toLowerCase();
    if (!trimmedWord || trimmedWord.split(' ').length > 1) return;
    console.log(trimmedWord);
    navigate(`/search/${word}`);
  }

  return (
    <div className="homepage">
      <div className="row row-toggle">
          <div className='col-6 col-logo'><h1 className="title-d logo">:D</h1></div>
          <div className='col-6 col-toggle'>
          <FontAwesomeIcon icon={faBookmark} className='bookmark-icon'/>
          <FontAwesomeIcon icon={faToggleOn} className='toggle-icon'/></div>
        </div>
      <div className='row-dictionary'>
      <h1>
        <span className="title-d">:D</span>
        <span className="title">ictionary</span>
      </h1>
      <div className="box-search">
        <form onSubmit={handleSubmit}>
          <div className='row-search'>
            <FontAwesomeIcon icon={faSearch} className='search-icon'/>
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
      <div></div>
    </div>
  );
}

export default Homepage;
