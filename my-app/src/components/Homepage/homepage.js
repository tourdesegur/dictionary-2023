import './homepage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faMagnifyingGlass } from '@fortawesome/free-regular-svg-icons'; // Import the specific icon you want to use
const Homepage = () => {
  return (
    <div className="Homepage">
          <h1>
              <span className="title-d">:D</span>
              <span className="title">ictionary</span>
          </h1>
          <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text bg-white">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </span>
      </div>
      <input
        type="text"
        className="form-control"
        placeholder="Type a word"
        aria-label="Type a word"
        aria-describedby="basic-addon2"
      />
    </div>
    </div>
  )
}

export default Homepage