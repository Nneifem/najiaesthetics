import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import About from '../pages/About';
import Contact from '../pages/Contact'
import Products from '../pages/Products';
import Homepage from '../pages/Homepage';

function Navigation(){
    return (
        <>
            {[false,].map((expand) => (
                <Navbar key={expand} expand={expand} className='bg-body-tertiary mb-3'>
                    <Container fluid>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement='end'
                            >
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>Najiaesthics</Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <Nav className='justify-content-end flex-grow-1 pe-3'>
                                        <Nav.Link href='Homepage'>Home</Nav.Link>
                                        <Nav.Link href='About'>About</Nav.Link>
                                        <Nav.Link href='Products'>Products</Nav.Link>
                                        <Nav.Link href='Contact'>Contact</Nav.Link>
                                    </Nav>
                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
}

export default Navigation;
