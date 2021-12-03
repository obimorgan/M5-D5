import { Nav, Container } from "react-bootstrap"
import { Link } from "react-router-dom"

export const Navbar = () => {

    <Nav
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
        <Nav.Item>
            <Link to="/">
                <div className="nav-link">Home</div>
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

}