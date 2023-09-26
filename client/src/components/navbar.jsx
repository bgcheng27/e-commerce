import { useState } from "react";
import axios from "axios"

export default function Navbar() {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [resultedSearchTerm, setResultedSearchTerm] = useState("");
  const [categories, setCategories] = useState([])
  
  const [selectedCategory, setSelectedCategory] = useState("")

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchText(value);
  };

  const search = (event) => {
    event.preventDefault();

    if (searchText === "") return;

    setProducts(() => {
      axios({
        method: "post",
        url: "http://localhost:3000/api/search",
        headers: {},
        data: {
          searchTerm: searchText,
        },
      }).then((results) => {
        setProducts(results.data);
      });
    });

    setResultedSearchTerm(searchText);
    setSearchText("");
  };

  return (
    <div className="navbar">
      <div className="nav-left"></div>
      <div className="nav-mid">
        <form className="search-form" onSubmit={search}>
          <div className="input-group">
            <select className="category-dropdown">
              <option>All</option>
              {categories.map((c) => (
                <option key={c.category_id}>{c.category}</option>
              ))}
            </select>
            <input
              name="searchInput"
              className="search"
              type="text"
              value={searchText}
              onChange={handleChange}
            ></input>
            <button onClick={search} type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
      <button className="sell-btn">Sell</button>
      <div className="nav-right">
        <div className="pfp"></div>
      </div>
    </div>
  );
}
