import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";

function ResetPassword() {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Send email to user with password reset link
        // ...
        setSubmitted(true);
    };

    // Handle email input change
    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    return (
        <div className="container">
            <Card className="mx-auto my-5" style={{ width: "18rem" }}>
                <Card.Body>
                    <Card.Title>Reset Password</Card.Title>
                    {submitted ? (
                        <Card.Text>
                            We have sent you an email with a link to reset your password.
                        </Card.Text>
                    ) : (
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    value={email}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Send Reset Link
                            </Button>
                        </Form>
                    )}
                </Card.Body>
            </Card>
        </div>
    );
}

export default ResetPassword;