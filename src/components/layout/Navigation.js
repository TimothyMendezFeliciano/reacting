import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useState } from "react";

const videos = [
  { title: "Tyrion", link: "https://www.youtube.com/watch?v=H9HFigfkKHA" },
  { title: "Euron", link: "https://www.youtube.com/watch?v=sbX_ak0N1EI" },
  { title: "Cersei", link: "https://www.youtube.com/watch?v=K5TX2aLdB4s" },
  { title: "Summerhall", link: "https://www.youtube.com/watch?v=85P2-4NZqLM" },
];

function Dropdown(props) {
  const [videos, setVideos] = useState(props.videos);
  const videoItems = videos.map((video) => (
    <NavDropdown.Item key={video.link} href={video.link} target="blank">
      {video.title}
    </NavDropdown.Item>
  ));
  return videoItems;
}

function Navigation() {
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">React Solidity</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/axolotl">Axolotl</Nav.Link>
              <Nav.Link href="/pokemon">Pokemon</Nav.Link>
              <NavDropdown id="basic-nav-dropdown" title="Alt Shift X">
                <Dropdown videos={videos} />
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Navigation;
