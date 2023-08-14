import './homepage.css'
import searchIcon from './search-interface-symbol.png';
const Homepage = () => {
  return (
    <div className="Homepage">
          <h1>
              <span className="title-d">:D</span>
              <span className="title">ictionary</span>
          </h1>
          <div className="box row-search">
            <img src={searchIcon} className='search-icon' alt='search-icon'/>
            <input
              type="text"
              placeholder="Type a word"
            />
          </div>
    </div>
  )
}

export default Homepage