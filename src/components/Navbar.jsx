import React, { useContext } from "react";
import { AppContext } from "../context/GlobalContext";
import { Link } from "react-router-dom";

function Navbar() {
  const { totalItemsInCart, handleSearchChange } = useContext(AppContext);

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Anasafya
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Ürünler
                </Link>
              </li>
            </ul>
            <form
              className="d-flex"
              role="search"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={handleSearchChange}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  <i className="fa-solid fa-cart-shopping fa-2x"></i>(
                  {totalItemsInCart})
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
