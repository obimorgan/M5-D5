import { Container, Button } from "react-bootstrap";
import Jumbotron from 'react-bootstrap/Jumbotron'

const SingleProductPage = () => {
    return (
        <>
            <div>Hello</div>
            <Container>
                <Jumbotron>
                    <h1>Hello, world!</h1>
                    <p>
                        This is a simple hero unit, a simple jumbotron-style component for calling
                        extra attention to featured content or information.
                    </p>
                    <p>
                        <Button variant="primary">Learn more</Button>
                    </p>
                </Jumbotron>
            </Container>
        </>
    )
}

export default SingleProductPage