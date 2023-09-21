import { useEffect, useState } from "react"
import "../public/styles.css"

function App() {
  const [products, setProducts] = useState([]);

  return (
    <>
      <div className="navbar">
        <div className="nav-left">
          
        </div>
        <div className="nav-mid">
          <form className="search-form">
            <div className="input-group">
              <button>Dropdown</button>
              <input name="searchInput" className="search" type="text"></input>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
        <button className="sell-btn">Sell</button>
        <div className="nav-right">
          <div className="pfp">

          </div>
        </div>
      </div>
      <div>
        <h1>Body</h1>
      </div>
    </>
  )
}

export default App
