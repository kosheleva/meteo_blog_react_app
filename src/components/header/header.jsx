import Nav from "react-bootstrap/Nav";
import "./header.css";

function Header() {
  return (
    <>
      <Nav className="justify-content-center header" activeKey="/home">
        <Nav.Item className="header_link">
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item className="header_link">
          <Nav.Link href="/blog">Blog</Nav.Link>
        </Nav.Item>
        <Nav.Item className="header_link">
          <Nav.Link href="/contacts">Contacts</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default Header;
