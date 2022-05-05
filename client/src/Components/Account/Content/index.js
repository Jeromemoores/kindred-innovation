import {Form, Button} from 'react-bootstrap'

export function SignUp() {
    return(
        <Form>
            <Form.Group className='mb-3' controlId='suemail'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control type='text' placeholder='Enter Email'/>
            </Form.Group>
            <Form.Group className='mb-3' controlId='sufirstname'>
                <Form.Label>First Name</Form.Label>
                <Form.Control type='text' placeholder='Enter First Name'/>
            </Form.Group>
            <Form.Group className='mb-3' controlId='sulastname'>
                <Form.Label>Last Name</Form.Label>
                <Form.Control type='text' placeholder='Enter Last Name'/>
            </Form.Group>
            <Form.Group className='mb-3' controlId='sucompany'>
                <Form.Label>Company Affiliated</Form.Label>
                <Form.Control type='text' placeholder='Enter Company Name'/>
                <Form.Text className='text-muted'>
                    Please put the company name you are affiliated with to be approved faster.
                </Form.Text>
            </Form.Group>
            <Form.Group className='mb-3' controlId='sucompanyp'>
                <Form.Label>Company Position</Form.Label>
                <Form.Control type='text' placeholder='Enter Your Position'/>
            </Form.Group>
            <Form.Group className='mb-3' controlId='supassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' placeholder='Enter Password'/>
            </Form.Group>
            <Form.Group className='mb-3' controlId='csupassword'>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type='password' placeholder='Confirm Password' />
            </Form.Group>
            <Button variant='primary' type='submit'>
                Sign Up
            </Button>
        </Form>
    )
}

export function SignIn() {
    return(
        <Form>
            <Form.Group className='mb-3' controlId='siemail'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control type='email' placeholder='Enter Email' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='sipassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' placeholder='Enter Password' />
            </Form.Group>
            <Button variant='primary' type='submit'>
                Sign In
            </Button>
        </Form>
    )
}

export function SignOut() {
    return(
        <>
        </>
    )
}