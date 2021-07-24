import { Link } from 'gatsby';
import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Login = () => {
    return (
        <Container className="d-flex justify-content-center">
            <Form className="my-3 py-3">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>

                <Button style={{backgroundColor:"#50c850"}} type="submit">
                    Login
                </Button>
                <p>Not registered yet? Click <Link to="../Signup">here</Link> to signup</p>
            </Form>
        </Container>
    )
}

export default Login;
