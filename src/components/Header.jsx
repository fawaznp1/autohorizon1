import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css'

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-dark text-white">
      <Container>
        <Navbar.Brand href="/" className="text-white">Auto Horizon</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" /> 
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className="text-white">Home</Nav.Link>
            <Nav.Link href="/footer"  className="text-white">Contact</Nav.Link>
            <NavDropdown title="Car Manufactures" id="basic-nav-dropdown" className="text-white">
            <NavDropdown.Item href="https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwj7ltnppu-IAxVsq2YCHVuLCa4YABAAGgJzbQ&co=1&ase=2&gclid=Cj0KCQjw3vO3BhCqARIsAEWblcCZ6-wplClWc7CFedIOp490EMbUIe21bYMNeFP_WjSYICypKGIQCK8aAtreEALw_wcB&ohost=www.google.com&cid=CAESVuD24gyvOO4dBofaMG5f78KYf2awk-TDxNwjXebBO2hHqGL9SsKcEOcQKmUTGxj6hlEJTEyHdu-t_gHbujuXvmuEIBYjx5ydlU830yOSHcKM5MIWl-x1&sig=AOD64_0a58RTwEL0E2W3Dux4n1OqjSQHWw&q&nis=4&adurl&ved=2ahUKEwiXi9Lppu-IAxUqUGwGHWtFNIAQ0Qx6BAgJEAE" target="_blank">Mercedes Benz</NavDropdown.Item>
              <NavDropdown.Item href="https://www.bmw.com/" target="_blank">BMW</NavDropdown.Item>
              <NavDropdown.Item href="https://www.toyota.com/" target="_blank">Toyota</NavDropdown.Item>
              <NavDropdown.Item href="https://www.ford.com/" target="_blank">Ford</NavDropdown.Item>
              <NavDropdown.Item href="https://www.honda.com/" target="_blank">Honda</NavDropdown.Item>
              <NavDropdown.Item href="https://www.chevrolet.com/" target="_blank">Chevrolet</NavDropdown.Item>
              <NavDropdown.Item href="https://www.nissan-global.com/" target="_blank">Nissan</NavDropdown.Item>
              <NavDropdown.Item href="https://www.volkswagen.com/" target="_blank">Volkswagen</NavDropdown.Item>
              <NavDropdown.Item href="https://www.audi.com/" target="_blank">Audi</NavDropdown.Item>
              <NavDropdown.Item href="https://www.hyundai.com/" target="_blank">Hyundai</NavDropdown.Item>
              <NavDropdown.Item href="https://www.kia.com/" target="_blank">Kia</NavDropdown.Item>
              <NavDropdown.Item href="https://www.mitsubishi-motors.com/" target="_blank">Mitsubishi</NavDropdown.Item>
              <NavDropdown.Item href="https://www.porsche.com/" target="_blank">Porsche</NavDropdown.Item>
              <NavDropdown.Item href="https://www.subaru.com/" target="_blank">Subaru</NavDropdown.Item>
              <NavDropdown.Item href="https://www.volvo.com/" target="_blank">Volvo</NavDropdown.Item>
              <NavDropdown.Item href="https://www.jaguar.com/" target="_blank">Jaguar</NavDropdown.Item>
              <NavDropdown.Item href="https://www.landrover.com/" target="_blank">Land Rover</NavDropdown.Item>
              <NavDropdown.Item href="https://www.mazda.com/" target="_blank">Mazda</NavDropdown.Item>
              <NavDropdown.Item href="https://www.chrysler.com/" target="_blank">Chrysler</NavDropdown.Item>
              <NavDropdown.Item href="https://www.dodge.com/" target="_blank">Dodge</NavDropdown.Item>
              <NavDropdown.Item href="https://www.lamborghini.com/" target="_blank">Lamborghini</NavDropdown.Item>
              <NavDropdown.Item href="https://www.ferrari.com/" target="_blank">Ferrari</NavDropdown.Item>
         
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
