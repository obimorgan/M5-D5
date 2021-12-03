import { Container, Navbar, } from "react-bootstrap"
import ProductItem from "../Products/ProductItem"
import NavBar from "../NavBar/NavBar"


const Homepage = () => {
    return (
        <Container>
            <NavBar/>
            <h3>Products</h3>
            <div className="d-flex justifiy-content-around flex-wrap">
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
            </div>
        </Container>
    )
}

export default Homepage