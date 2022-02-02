import React from "react";

export const SearchBar = ({ onTermChange, onFormSubmit, searchTerm }) => {
  return (
    <form className="search-bar" onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Search by name or ID"
        onChange={onTermChange}
      />
    </form>
  );
};
