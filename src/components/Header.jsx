import { useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ onSearchChange }) => {
  return (
    <header>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid container">
          <Link to="/" className="navbar-brand text-danger fw-bold">
            Meetup
          </Link>
          <form className="d-flex" role="search">
            <input
              onChange={(e) => onSearchChange(e.target.value)}
              className="form-control me-2"
              type="search"
              placeholder="Search by title or tag"
              aria-label="Search"
            />
          </form>
        </div>
      </nav>
    </header>
  );
};
export default Header;
