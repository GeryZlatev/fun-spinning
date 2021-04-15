import { Form, Button, Alert } from 'react-bootstrap';
import { useState } from 'react';
import { withRouter } from 'react-router-dom';
import style from './SignUp.module.css';
import * as serviceDB from '../../../services/serviceDB';

const SignUp = ({history}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordErr] = useState('');
    const [rePassErr, setRePassErr] = useState('');
    const [success, setSuccess] = useState(true);

    const clearErrors = () => {
        setPasswordErr('');
        setEmailError('');
        setRePassErr('');
    }

    const clearInputs = () => {
        setEmail('');
        setPassword('');
        setRePassword('');
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        serviceDB.signUp(email, password)
            .then(res => {
                clearInputs();
                clearErrors();
                setSuccess(true);
                history.push('/sign-in')
            })
            .catch(err => {
                setSuccess(false);
                clearInputs();
                clearErrors();
            });
    }
    return (
<div className={style["sign-up-form-wrapper"]}>
        <Form onSubmit={onSubmitHandler}>
            <Form.Group controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                    <Form.Control
                        onBlur={(e) => {
                            const currEmail = e.target.value;
                            if (!currEmail.includes('@')) {
                                setEmailError('Wrong email format!');
                                setEmail('');
                            } else {
                                setEmailError('');
                            }
                        }}
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        type="email" placeholder="Enter email" />
                </Form.Group>
                {emailError ? <Alert variant="danger">{ emailError}</Alert> : null}
            <Form.Group controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                    <Form.Control
                        onBlur={(e) => {
                            if (e.target.value.length < 6) {
                                setPasswordErr('The password is too short!')
                                setPassword('')
                            } else {
                                setPasswordErr('')
                            }
                        }}
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        type="password" placeholder="Password" />
                </Form.Group>
                {passwordError ? <Alert variant="danger">{ passwordError}</Alert> : null}
            <Form.Group controlId="formGroupRe-Password">
                <Form.Label>Confirm password</Form.Label>
                    <Form.Control
                        onBlur={(e) => {
                            if (password !== rePassword) {
                                setRePassErr('Passwords missmatch!');
                                setPassword('')
                                setRePassword('')
                            } else {
                                setRePassErr('')
                            }
                        }}
                        onChange={(e) => setRePassword(e.target.value)}
                        value={rePassword}
                        type="password" placeholder="Confirm password" />
                </Form.Group>
                {rePassErr ? <Alert variant="danger">{ rePassErr}</Alert> : null}
            <Button variant="dark" type="submit">
                Sign up
            </Button>
            </Form>
            {!success ? <Alert variant="warning">Something went wrong! We're so sorry. Please fill all inputs and try again!</Alert>: null}
</div>
    )
}

export default withRouter(SignUp);
