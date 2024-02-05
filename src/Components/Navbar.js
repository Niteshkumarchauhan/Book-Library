import React from "react";
import bookLibrarylogo from "../Images/bookLibraryLogo.svg";
import searchIcon from "../Images/search_icon.svg";

export const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="bookLogo">
          <img src={bookLibrarylogo} width="100" height="70" />
        </div>
        <div className="searchBar">
          <input
            className="searchText"
            type="text"
            id="filter"
            placeholder="Search for Books"
          />
          <img className="searchIcon" src={searchIcon} width="30" height="30" />
        </div>
        <div className="createAccount">
          <a>Create Account</a>
        </div>
      </div>
    </>
  );
};
