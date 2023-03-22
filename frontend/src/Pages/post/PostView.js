import { useState } from "react";
import { useParams } from "react-router-dom";
import userService from "../../services/user.service";

const PostView = () => {

    const id = useParams();

    const [post, setPost] = useState();

    useEffect(() => {
        first

        return () => {
            second
        }
    }, [third])



    return <div></div>;
};
export default PostView;