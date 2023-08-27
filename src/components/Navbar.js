import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { FaSearch } from "react-icons/fa";
import avatar from "../assets/Netflix-avatar.png";
import { useNavigate } from "react-router-dom";
import { useSearch } from "../utils/SearchContext";

const Navbar = ({ isScrolled }) => {
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);
  const [inputHover, setInputHover] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const { searchQuery, setSearchQuery } = useSearch();
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (searchQuery.trim() !== "") {
        navigate("/search");
      }
    }
  };

  const links = [
    { name: "Home", link: "/" },
    { name: "TV Shows", link: "/tv" },
    { name: "Movies", link: "/movies" },
    { name: "My List", link: "/mylist" },
  ];

  return (
    <Container>
      <nav className={`${isScrolled ? "scrolled" : ""} flex`}>
        <div className="left flex a-center">
          <div className="brand flex a-center j-center">
            <img src={logo} alt="Logo" />
          </div>
          <ul className="links flex">
            {links.map(({ name, link }) => {
              return (
                <li key={name}>
                  <Link to={link}>{name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="right flex a-center">
          <div className={`search ${showSearch ? "show-search" : ""}`}>
            <button
              onFocus={() => setShowSearch(true)}
              onBlur={() => {
                if (!inputHover) {
                  setShowSearch(false);
                }
              }}
            >
              <FaSearch />
            </button>
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              onMouseEnter={() => setInputHover(true)}
              onMouseLeave={() => setInputHover(false)}
              onBlur={() => {
                setShowSearch(false);
                setInputHover(false);
              }}
            />
          </div>
          <button onClick={toggleDropdown}>
            <div className="image-dropdown">
              <img src={avatar} alt="avatar_icon" className="avatar" />
              {isDropdownOpen && (
                <div className="dropdown-content">
                  <ul>
                    <li>
                      <Link to={"/subscription"}>Subscription</Link>
                    </li>
                    <li>
                      <Link to={"/login"}>SignOut</Link>
                    </li>
                    <li>
                      <Link to={"/userprofile"}>Profile Setting</Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </button>
        </div>
      </nav>
    </Container>
  );
};
const Container = styled.div`
  .scrolled {
    background-color: black;
  }
  nav {
    top: 0;
    height: 6.5rem;
    width: 100%;
    justify-content: space-between;
    position: fixed;
    top: 0;
    z-index: 2;
    padding: 0 4rem;
    align-items: center;
    transition: 0.3s ease-in-out;
    .left {
      gap: 2rem;
      .brand {
        img {
          height: 4rem;
        }
      }
      .links {
        list-style-type: none;
        gap: 2rem;
        li {
          a {
            color: white;
            text-decoration: none;
          }
        }
      }
    }
    .right {
      gap: 1rem;
      button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        &:focus {
          outline: none;
        }
        svg {
          color: #f34242;
          font-size: 1.2rem;
        }
      }
      .search {
        display: flex;
        gap: 0.4rem;
        align-items: center;
        justify-content: center;
        padding: 0.2rem;
        padding-left: 0.5rem;
        button {
          background-color: transparent;
          border: none;
          &:focus {
            outline: none;
          }
          svg {
            color: white;
            font-size: 1.2rem;
          }
        }
        input {
          width: 0;
          opacity: 0;
          visibility: hidden;
          transition: 0.3s ease-in-out;
          background-color: transparent;
          border: none;
          color: white;
          &:focus {
            outline: none;
          }
        }
      }
      .show-search {
        border: 1px solid white;
        background-color: rgba(0, 0, 0, 0.6);
        input {
          width: 100%;
          opacity: 1;
          visibility: visible;
          padding: 0.3rem;
        }
      }
    }
  }
  .avatar {
    width: 40px;
    height: 40px;
  }

  .image-dropdown {
    position: relative;
    display: inline-block;
  }

  .image-dropdown img {
    cursor: pointer;
  }

  .dropdown-content {
    position: absolute;
    top: 100%;
    left: 0;
    background-color: white;
    border: 1px solid #ccc;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    min-width: 150px;
    z-index: 1;
    padding-right: 60px;
  }

  .dropdown-content ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  .dropdown-content li {
    padding: 8px 16px;
  }

  .dropdown-content a {
    text-decoration: none;
    color: #333;
  }

  .dropdown-content a:hover {
    background-color: #f1f1f1;
  }
`;
export default Navbar;
