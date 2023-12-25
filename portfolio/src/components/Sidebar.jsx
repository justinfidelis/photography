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
        <p role="button" id="nav-name" onClick={() => navigate("/")}>
          Justin Wong
        </p>
      </NavbarBrand>
      <Nav className="flex-column" id="nav-photo">
        <Nav.Item>
          <Nav.Link onClick={() => navigate("/singapore")}>Singapore</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => navigate("/travel")}>Travel</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => navigate("/film")}>Film</Nav.Link>
        </Nav.Item>
      </Nav>

      <Nav className="flex-column" id="nav-info">
        <Nav.Item>
          <Nav.Link onClick={() => navigate("/about")}>About</Nav.Link>
        </Nav.Item>
        {/* <Nav.Item>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav.Item> */}
      </Nav>
    </Navbar>
  );
};

export default Sidebar;
