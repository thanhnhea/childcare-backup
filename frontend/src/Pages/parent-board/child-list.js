import { useState } from "react";
import { useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import userService from "../../services/user.service";

const ChildlList = () => {

    const [children, setChildren] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await userService.getAllChildrenOfUser();
            setChildren(response.data);
        }
        fetchData();
    }, [])


    return (
        <Container className="mb-3">
            <Row>
                {children.map((child) => (
                    <Col sm={12} md={6} lg={4} key={child.id}>
                        <Card className="my-3">
                            <Card.Body>
                                <Card.Title>{child.firstName} {child.lastName}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{child.status}</Card.Subtitle>
                                <Card.Text>
                                    Age: {Math.floor((new Date() - new Date(child.dob)) / (365.25 * 24 * 60 * 60 * 1000))}
                                </Card.Text>
                                <Link to={`/child/${child.id}`} className="btn btn-primary">View Details</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <Row>
                <Col className="d-flex justify-content-center mt-3">
                    <Button variant="primary" href="/addchild">Add Child</Button>
                </Col>
            </Row>
        </Container>

    );
}
export default ChildlList;