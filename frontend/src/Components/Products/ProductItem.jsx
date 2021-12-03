import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ProductItem = ({ products }) => {

    return (
        <>
            {/* {products && products.map(product => */}

                <Card style={{ width: '16rem' }} className="m-1">
                    <Card.Img variant="top" src="https://unsplash.com/photos/PDX_a_82obo"/>
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
            
            {/* )} */}
        </>

    )
}
export default ProductItem