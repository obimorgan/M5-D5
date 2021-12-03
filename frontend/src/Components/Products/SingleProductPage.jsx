import { Container, Button, Jumbotron } from "react-bootstrap";
import CommentsItems from "../Comments/CommentsItems";
import {useNavigate} from "react-router-dom"

const SingleProductPage = () => {
    const navigate = useNavigate()
    return (
        <>
            <Container>
                <Jumbotron>
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
            </Container>
        </>
    )
}

export default SingleProductPage