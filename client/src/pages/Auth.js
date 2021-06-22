import { useState } from 'react'
import {Container, Row, Col, Card, Form, Button} from 'react-bootstrap'

export default function Auth({ setUser }) {

    const [ form, setForm ] = useState({username: ''})

    const { username } = form;

    const onChange = (e) =>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setUser(form)
    }

    return (
        <Container fluid className="auth">
            <Row 
                className="d-flex justify-content-center align-items-center"
                style={{height: '100vh'}}
            >
                <Col md="4">
                    <Card>
                        <Card.Body>
                        <Form onSubmit={onSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control onChange={onChange} name="username" value={username} type="text" placeholder="Username" />
                            </Form.Group>
                            <div className="d-grid gap-2">
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </div>
                        </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
