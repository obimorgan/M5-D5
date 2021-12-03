import { Container, Row, Col, Jumbotron } from "react-bootstrap";

const SingleProductPage = () => {
    return (
        <Container>
            <Row>
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
            </Row>
        </Container>
    )
}

export default SingleProductPage