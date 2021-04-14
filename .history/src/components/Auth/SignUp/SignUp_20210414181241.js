import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import style from './SignUp.module.css';
import * as serviceDB from '../../../services/serviceDB';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordErr] = useState('');
    return (
<div className={style["sign-up-form-wrapper"]}>
        <Form >
            <Form.Group controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                    <Form.Control
                        onBlur={(e) => {
                            console.log(e.target.value)
                        }}
                        value={email}
                        type="email" placeholder="Enter email" />
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
</div>
    )
}

export default SignUp;
