import React, { useState } from "react";
import SearchResults from "./SearchResults";
import "./search.css";

const Search = ({ products, onAddToCart }) => {
  const [searchTerm, setSearchTerm] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  const submitHandler = event => {
    event.preventDefault();

    const search = products.filter(value => {
      if (
        value.name
          .toString()
          .toLowerCase()
          .includes(searchTerm.toString().toLowerCase())
      ) {
        return value;
      }
    });
    const filteredNames = search.map(item => {
      return item;
    });
    console.log(filteredNames);
    setFilteredPosts(filteredNames);
  };

  const Error = () => {
    return (
      <>
        <h3 className="text-center mt-5">No items were found</h3>
      </>
    );
  };

  const colSize = "4"

  const cardList = filteredPosts.map(product => (
    <div className={`col-sm-${colSize} mb-5`}>
      <SearchResults 
        product={product} 
        key={product.id} 
        onAddToCart={onAddToCart}
      />
    </div>
  ))

  return (
    <div className="d-none d-md-block">
      <form className="d-flex col-6 col-sm-3 position-absolute search-area">
        <input
          className="form-control me-2"
          type="search"
          name="query"
          onChange={e => setSearchTerm(e.target.value)}
          placeholder="Search"
          aria-label="Search"
        />
        <button
          className="btn btn-light fw-bold"
          type="submit"
          onClick={submitHandler}
        >
          Search
        </button>
      </form>
             <div className="row mt-3">
          {filteredPosts.length > 0 ? cardList : <Error /> }
        </div>
    </div>
  );
};

export default Search;
