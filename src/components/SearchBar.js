import React from "react";

export const SearchBar = ({ onTermChange, onFormSubmit, searchTerm }) => {
  return (
    <form onSubmit={onFormSubmit}>
      <input
        className="search-bar"
        type="text"
        placeholder="Search by name or ID"
        onChange={onTermChange}
      />
    </form>
  );
};
