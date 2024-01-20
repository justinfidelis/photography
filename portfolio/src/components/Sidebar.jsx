import React, { useState } from "react";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavbarBrand from "react-bootstrap/esm/NavbarBrand";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [currentPage, setCurrentPage] = useState(0);

  let navigate = useNavigate();
  return (
    <Navbar className="flex-column sidebar">
      <NavbarBrand>
        <p
          role="button"
          id="nav-name"
          onClick={() => {
            navigate("/");
            setCurrentPage(0);
          }}
        >
          Justin Wong
        </p>
      </NavbarBrand>
      <Nav className="flex-column" id="nav-photo">
        <Nav.Item>
          <Nav.Link
            style={
              currentPage === 1 ? { color: "var(--bs-navbar-hover-color)" } : {}
            }
            onClick={() => {
              navigate("/singapore");
              setCurrentPage(1);
            }}
          >
            Singapore
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            style={
              currentPage === 2 ? { color: "var(--bs-navbar-hover-color)" } : {}
            }
            onClick={() => {
              navigate("/travel");
              setCurrentPage(2);
            }}
          >
            Travel
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            style={
              currentPage === 3 ? { color: "var(--bs-navbar-hover-color)" } : {}
            }
            onClick={() => {
              navigate("/film");
              setCurrentPage(3);
            }}
          >
            Film
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <Nav className="flex-column" id="nav-info">
        <Nav.Item>
          <Nav.Link
            style={
              currentPage === 4 ? { color: "var(--bs-navbar-hover-color)" } : {}
            }
            onClick={() => {
              navigate("/about");
              setCurrentPage(4);
            }}
          >
            About
          </Nav.Link>
        </Nav.Item>
        {/* <Nav.Item>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav.Item> */}
      </Nav>
    </Navbar>
  );
};

export default Sidebar;
