import React from "react";
import "./style.css";

function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="book">Book title</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="book"
          list="book"
          type="text"
          className="form-control"
          placeholder="Type in a book title to begin:"
          id="book"
        />
        <datalist id="books">
          {props.titles.map(title => (
            <option value={title} key={title} />
          ))}
        </datalist>
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
