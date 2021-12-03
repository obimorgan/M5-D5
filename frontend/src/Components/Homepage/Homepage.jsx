import { Container, Row } from "react-bootstrap"
import ProductItem from "../Products/ProductItem"


const Homepage = () => {
    return (
        <Container>
            <h3>Products</h3>
            <Row>
                
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
            </Row>
        </Container>
    )
}

export default Homepage