import { Form, Button } from 'react-bootstrap';
import style from './SignUp.module.css';

const SignUp = () => {
    return (
        <Form>
            <Form.Group controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password"/>
            </Form.Group>
            <Form.Group controlId="formGroupRe-Password">
                <Form.Label>Confirm password</Form.Label>
                <Form.Control type="password" placeholder="Confirm password"/>
            </Form.Group>

            <Button variant="dark" type="submit">
                Sign up
            </Button>
        </Form>
    )
}

export default SignUp;
