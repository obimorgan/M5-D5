import { Container, Row } from "react-bootstrap"
import ProductItem from "../Products/ProductItem"


const Homepage = () => {
    return (
        <Container>
            <Row>
                <ProductItem/>
            </Row>
        </Container>
    )
}

export default Homepage