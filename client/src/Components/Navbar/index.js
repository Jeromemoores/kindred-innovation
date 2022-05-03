import {Navbar, Nav, NavDropdown} from 'react-bootstrap'

export function TopNav() {
    return(
        <Navbar collapseOnSelect expand='lg' className='top_navbar'>
            <Navbar.Brand href='/' className='offset_left'><img alt='32x32' src='/favicon-32x32.png' width='32' height='32' className='d-inline-block'/>{''}Kindred Innovation</Navbar.Brand>
            <Navbar.Toggle aria-controls='top_navbar'/>
            <Navbar.Collapse id='top_navbar'>
                <Nav className='me-auto'>
                    <Nav.Link href='/'>3D Model</Nav.Link>
                    <Nav.Link href='/'>Contact Us</Nav.Link>
                </Nav>
                <Nav className='offset_right'>
                    <NavDropdown title='Account'>
                        <NavDropdown.Item href='/'>Sign In</NavDropdown.Item>
                        <NavDropdown.Item href='/'>Sign Up</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href='/'>Sign Out</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}