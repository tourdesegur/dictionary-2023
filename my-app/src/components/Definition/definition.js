import { useState } from 'react';
import './definition.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faSearch as faSearchSolid, faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import { useParams, useNavigate } from 'react-router-dom';

const Definition = () => {
  const [word, setWord] = useState("");
  const {searchWord} = useParams();
  

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmedWord = word.trim().toLowerCase();
    if (!trimmedWord || trimmedWord.split(' ').length > 1) return;
    console.log(trimmedWord);
  }


  return (
    <div>
      <div className="box-search">
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
      <h1 className='target-word'>{searchWord}:</h1>
      <h2 className='pronunciation'>/sunrise/<FontAwesomeIcon icon={faVolumeUp} className='sound-icon' /></h2>

    </div>
    
  )
}

export default Definition