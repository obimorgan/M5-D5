import { Card, Button } from 'react-bootstrap'
// import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const ProductItem = ({ products }) => {
    // const navigate = useNavigate()
    return (
        <>
            {products && products.map(product =>
                <Card style={{ width: '18rem' }} className="m-1 fluid-image">
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        {/* <Button variant="primary"
                onClick={() => navigate('/single-product')}>Peview</Button> */}
                        <Link to="/single-product">
                            <Button variant="success">Details</Button>
                        </Link>
                    </Card.Body>
                </Card>
            )}
        </>

    )
}
export default ProductItem