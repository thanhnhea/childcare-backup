import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import userService from '../../services/user.service';

const PostList = () => {
    // const posts = [
    //     { id: 1, title: 'First Post', author: 'John Doe', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', imageUrl: 'https://api.api-ninjas.com/v1/randomimage' },
    //     { id: 2, title: 'Second Post', author: 'Jane Smith', content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.', imageUrl: 'https://api.api-ninjas.com/v1/randomimage' },
    //     { id: 3, title: 'Third Post', author: 'Mark Johnson', content: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis.', imageUrl: 'https://api.api-ninjas.com/v1/randomimage' },
    // ];

    const [posts, setPost] = useState([]);
    const navigate = useNavigate();

    useState(async () => {
        const data = await userService.getAllPost();
        setPost(data.data);
    }, []);


    const handleClick = (id) => {
        console.log(id);
        navigate('/post/' + id, { replace: true })
    }

    return (
        <Container>
            <Row>
                <Col md={{ span: 8, offset: 2 }}>
                    {posts.map(post => (
                        <Card key={post.id} className="mb-3">
                            <Card.Header>{post.title}</Card.Header>
                            <Card.Body>
                                <Card.Subtitle className="mb-2 text-muted">{post.user.username}</Card.Subtitle>
                                <Card.Text>{post.content}</Card.Text>
                                <Button variant="primary" onClick={() => handleClick(post.id)}>Read More</Button>
                            </Card.Body>
                        </Card>
                    ))}
                </Col>
            </Row>
        </Container>
    );
};

export default PostList;