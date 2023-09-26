import { useEffect, useState } from "react";
import axios from "axios";
import "../public/styles.css"

import Card from "./components/card";


function App() {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [resultedSearchTerm, setResultedSearchTerm] = useState("");
  const [categories, setCategories] = useState([])

  const [selectedCategory, setSelectedCategory] = useState("")

  useEffect(() => {
    axios.get("http://localhost:3000/")
      .then((results) => {
        setProducts(results.data);
      })

    axios.get("http://localhost:3000/api/categories")
      .then((results) => {
        setCategories(results.data)
      })
  }, []);

  useEffect(() => {
    console.log("change cat");
  }, [selectedCategory]);

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchText(value)
  }

  const search = (event) => {
    event.preventDefault();

    if (searchText === "") return;

    setProducts(() => {
      axios({
        method: "post",
        url: "http://localhost:3000/api/search",
        headers: {},
        data: {
          searchTerm: searchText
        }
      })
        .then((results) => {
          setProducts(results.data)
        })
    })

    setResultedSearchTerm(searchText);
    setSearchText("");
  }

  return (
    <>
      <div className="navbar">
        <div className="nav-left">

        </div>
        <div className="nav-mid">
          <form className="search-form" onSubmit={search}>
            <div className="input-group">
              <select className="category-dropdown">
                <option>All</option>
                {categories.map((c) => <option key={c.category_id}>{c.category}</option>)}
              </select>
              <input name="searchInput" className="search" type="text" value={searchText} onChange={handleChange}></input>
              <button onClick={search} type="submit">Submit</button>
            </div>
          </form>
        </div>
        <button className="sell-btn">Sell</button>
        <div className="nav-right">
          <div className="pfp">

          </div>
        </div>
      </div>

      <div className="content">
        { resultedSearchTerm &&
          <div className="result-bar">
            <div className="results">
              <span>Results for "{resultedSearchTerm}": {products?.length}</span>
            </div>
            <div className="sort-by">
              <label>Sort By: </label>
              <button>Default</button>
            </div>
          </div> }
        {products?.map((product) => <Card key={product.product_id} product={product}/>)}
      </div>
    </>
  )
}

export default App
