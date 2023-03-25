import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import userService from '../../services/user.service';

const PostList = () => {

    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);
    const navigate = useNavigate();

    useState(() => {
        const fetchData = async () => {
            const data = await userService.getAllPost(page, size);
            setPosts(data.content);
        };
        fetchData();
    }, [page, size]);


    const handleClick = (id) => {
        navigate(`/post/${id}`, { replace: true });
    }

    return (
        <Container>
            <Row>
                <Col md={{ span: 8, offset: 2 }}>
                    {posts.map((post) => (
                        <Card key={post.id} className="mb-3">
                            <Row>
                                <Col md={4}>
                                    <Image src={post.thumbnailUrl} thumbnail />
                                </Col>
                                <Col md={8}>
                                    <Card.Header>{post.title}</Card.Header>
                                    <Card.Body>
                                        <Card.Subtitle className="mb-2 text-muted">
                                            {post.user.username}
                                        </Card.Subtitle>
                                        <Card.Text>{post.content}</Card.Text>
                                        <Button variant="primary" onClick={() => handleClick(post.id)}>
                                            Read More
                                        </Button>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    ))}
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 8, offset: 2 }}>
                    <Button
                        variant="primary"
                        disabled={page === 0}
                        onClick={() => setPage(page - 1)}
                    >
                        Previous
                    </Button>
                    <Button
                        variant="primary"
                        disabled={posts.length < size}
                        onClick={() => setPage(page + 1)}
                    >
                        Next
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default PostList;