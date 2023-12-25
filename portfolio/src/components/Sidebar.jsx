import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  let navigate = useNavigate();
  return (
    <Navbar className="flex-column sidebar">
      <Nav className="flex-column" id="nav-photo">
        <Nav.Item>
          <Nav.Link onClick={() => navigate("/singapore")}>
            Singapore
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/travel">Travel</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/film">Film</Nav.Link>
        </Nav.Item>
      </Nav>

      <Nav className="flex-column" id="nav-info">
        <Nav.Item>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
}

export default Sidebar;
