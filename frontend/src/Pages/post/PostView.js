import axios from 'axios';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import authHeader from '../../services/auth-header';
import userService from '../../services/user.service';
import './Post.css';
import { Card, Form, Button } from "react-bootstrap";


function PostView() {
    const id = useParams();
    const [post, setPost] = useState([]);
    const [imageUrl, setImageUrl] = useState("");
    const [comments, setComments] = useState([]);
    const [postExist, setPostExist] = useState(false);
    const [successMessage, setSuccessMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    const { register, handleSubmit, setValue, formState: { errors } } = useForm();

    const fetPostData = async () => {
        const response = await userService.getPostDetails(id.id);
        const data = response.data;
        setPost(data);
        setPostExist(true);
        console.log(data);
        const response2 = await userService.getPostImage(id.id);
        const data2 = response2.data;
        setImageUrl(data2);
    };

    useEffect(() => {
        fetPostData();
    }, []);

    const onSubmit = (event) => {
        try {
            const content = event.comment;
            const postId = id.id;
            const response = axios.post('http://localhost:8080/api/post/comments/submit', { postId, content }, { headers: authHeader() });
            const data = response.data;
            setSuccessMessage('Comment Successfully!');
            setComments(data);
            setErrorMessage(null);
        } catch (error) {
            setErrorMessage('An error occurred while submitting the form. ' + error.response.data.message);
            setSuccessMessage(null);
            console.log(error.response.data.message)
        }
    };
    return (
        <Card className="my-4">
            {errorMessage && <p className="alert alert-danger">{errorMessage}</p>}
            {successMessage && <p className="alert alert-success">{successMessage}</p>}

            <Card.Body>
                <div className="d-flex align-items-center">
                    <img src={post.userProfilePic} alt={post.username} className="rounded-circle mr-3" width="50" height="50" />
                    <div>
                        <h5>{post.user.username}</h5>
                        <p className="text-muted">{post.title}</p>
                    </div>
                </div>
                <hr />
                <div>
                    <img src={`http://localhost:8080/api/post/image?id=${id.id}`} alt="" className="img-fluid" />
                    <p>{post.content}</p>
                </div>
                <hr />
                <h6>Comments</h6>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="d-flex align-items-center">
                        <img src={post.userProfilePic} alt={post.user.username} className="rounded-circle mr-3" width="30" height="30" />
                        <Form.Control type="text" placeholder="Add a comment..." />
                        <Button variant="primary" type="submit" className="ml-2">Submit</Button>
                    </Form.Group>
                </Form>
                <div>
                    {
                        //     post.comments.map((comment, index) => (
                        //     <div className="d-flex align-items-center my-3" key={index}>
                        //         <img src={comment.userProfilePic} alt={comment.userDto.username} className="rounded-circle mr-3" width="30" height="30" />
                        //         <div>
                        //             <h6>{comment.userDto.username}</h6>
                        //             <p>{comment.content}</p>
                        //         </div>
                        //     </div>
                        // ))
                    }
                </div>
            </Card.Body>
        </Card>
    );
}
export default PostView;