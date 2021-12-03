import { Nav, Container } from "react-bootstrap"
import { Link } from "react-router-dom"


export const NavBar = () => {
    return (
        <Container>
            <Nav
            className="px-0 pt-5 mb-5 border-bottom"
                activeKey="/home"
                onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
            >
                <Nav.Item>
                    <Link to="/">
                        <div className="nav-link pl-0">Home</div>
                    </Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/Back-Office">
                        <div className="nav-link">Back-Office</div>
                    </Link>
                </Nav.Item>
                {/* <Nav.Item>
                <div eventKey="disabled" disabled>
                    Disabled
                </div>
            </Nav.Item> */}
            </Nav>
        </Container>
    )
}

export default NavBar