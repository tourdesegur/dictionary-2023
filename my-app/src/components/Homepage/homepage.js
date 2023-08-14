import './homepage.css'

const Homepage = () => {
  return (
    <div className="Homepage">
          <h1>
              <span className="title-d">:D</span>
              <span className="title">ictionary</span>
          </h1>
          <div className="box">
            <img src='search-interface-symbol.png' alt='search-icon'/>
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