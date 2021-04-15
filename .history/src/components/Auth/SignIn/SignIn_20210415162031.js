import { Form, Button, Alert } from 'react-bootstrap';
import { useState } from 'react';
import { withRouter } from 'react-router-dom';
import style from './SignIn.module.css';
import * as serviceDB from '../../../services/serviceDB';

const SignIn = ({history}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState(true);
    const [errorSignIn, setErrorSignIn] = useState('');

    const clearInputs = () => {
        setEmail('');
        setPassword('');
    }

    const onSubmitSignInFormHandler = (e) => {
        e.preventDefault();
        serviceDB.signIn(email, password)
            .then((res) => {
                console.log(res)
                setSuccess(true);
                setErrorSignIn('')
                history.push('/');
            })
            .catch((err) => {
                setSuccess(false);
                clearInputs()
                setErrorSignIn(err.message)
        })
        
    }
    return (
        <div className={style["sign-in-form-wrapper"]}>
        <Form onSubmit={onSubmitSignInFormHandler}>
            <Form.Group controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                    <Form.Control
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        type="email" placeholder="Enter email" />
                </Form.Group>

            <Form.Group controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                    <Form.Control
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        type="password" placeholder="Password" />
                </Form.Group>

            <Button variant="dark" type="submit">
                Sign in
            </Button>
            </Form>
            <br/>
            {errorSignIn ? <Alert variant="warning">{ errorSignIn}</Alert> : null}
</div>
    )
}

export default withRouter(SignIn);