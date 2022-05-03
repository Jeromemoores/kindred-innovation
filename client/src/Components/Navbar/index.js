import {Navbar, Nav} from 'react-bootstrap'

export function TopNav() {
    return(
        <Navbar collapseOnSelect expand='lg' className='top_navbar'>
            <Navbar.Brand href='/' className='offset_left'>{''}Kindred Innovation</Navbar.Brand>
            <Navbar.Toggle aria-controls='top_navbar'/>
            <Navbar.Collapse id='top_navbar'>
                <Nav className='me-auto'>
                    <Nav.Link href='/'>3D Model</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}