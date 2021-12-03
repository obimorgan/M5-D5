import { Card, Button } from 'react-bootstrap'
// import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const ProductItem = () => {
    // const navigate = useNavigate()
    return (
        <Card style={{ width: '18rem' }} className="m-1">
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
                    <Button variant="primary">Peview</Button>
                </Link>
            </Card.Body>
        </Card>
    )
}
export default ProductItem