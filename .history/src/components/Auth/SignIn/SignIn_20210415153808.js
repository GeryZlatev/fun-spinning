import { useState } from 'react';
import style from './SignIn.module.css';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState(true);
    return (
        <div className={style["sign-in-form-wrapper"]}>
        <Form onSubmit={onSubmitHandler}>
            <Form.Group controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                    <Form.Control
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        type="email" placeholder="Enter email" />
                </Form.Group>
                {emailError ? <Alert variant="danger">{ emailError}</Alert> : null}
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
            {/* {!success ?  <Alert variant="warning">Something went wrong! We're so sorry. Please fill all inputs and try again!</Alert> : null} */}
</div>
    )
}

export default SignIn;