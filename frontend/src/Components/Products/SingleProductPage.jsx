import { Container, Button, Jumbotron } from "react-bootstrap";
import CommentsItems from "../Comments/CommentsItems";
import {useNavigate} from "react-router-dom"

const SingleProductPage = () => {
    const navigate = useNavigate()
    return (
        <>
            <Container>
                <div className="my-5">
                <Jumbotron >
                    <h1>Title</h1>
                    <p>
                        Product description.
                    </p>
                    <p>
                        <Button 
                        onClick={() => navigate("./")}
                        variant="primary">Edit</Button>
                    </p>
                </Jumbotron>
                <h5>Comments</h5>
                <CommentsItems />
                </div>
            </Container>
        </>
    )
}

export default SingleProductPage