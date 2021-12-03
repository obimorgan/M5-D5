import { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class Edit extends Component {
    state = {
        registration: {
            name: "",
            description: "",
            brand: "",
            category: "",
            price: "",
            imageURL: "",
           
        },
        showComplete: false,
    };

    handleInput = (key, value) => {
        this.setState({
            registration: {
                ...this.state.registration,
                [key]: value,
            },
        });
    };

    // formIsValidated = () => {
    //     let isValidated = false;
    //     if (
    //         this.state.registration.name.length >= 2 &&
    //         this.state.registration.brand.length >= 3 &&
           
    //     ) {
    //         isValidated = true;
    //     }
    //     return isValidated;
    // };

    handleRegistration = (e) => {
        e.preventDefault();
        this.setState({
            showComplete: true,
        });
    };

    render() {
        return (
            <div
                className="d-flex flex-column align-items-center mt-5"
                style={{ color: "white" }}
            >
                {this.state.showComplete ? (
                    <>
                        <h1>Registration complete!</h1>
                        <h3>Your details:</h3>
                        <p>{this.state.registration.name}</p>
                        <p>{this.state.registration.description}</p>
                        <p>{this.state.registration.brand}</p>
                        <p>{this.state.registration.category}</p>
                        <p>{this.state.registration.price}</p>
                        <p>{this.state.registration.imageURL}</p>
                       
                    </>
                ) : (
                    <>
                        <h1>......</h1>
                        <Form onSubmit={this.handleRegistration}>
                            <Form.Group>
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    required
                                    onChange={(e) => this.handleInput("name", e.target.value)}
                                    value={this.state.registration.name}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Surname</Form.Label>
                                <Form.Control
                                    type="text"
                                    required
                                    onChange={(e) => this.handleInput("description", e.target.value)}
                                    value={this.state.registration.description}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    required
                                    onChange={(e) => this.handleInput("brand", e.target.value)}
                                    value={this.state.registration.brand}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    required
                                    onChange={(e) => this.handleInput("category", e.target.value)}
                                    value={this.state.registration.category}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Year of Birth</Form.Label>
                                <Form.Control
                                    type="number"
                                    required
                                    onChange={(e) =>
                                        this.handleInput("price", e.target.value)
                                    }
                                    value={this.state.registration.price}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Street Address</Form.Label>
                                <Form.Control
                                    type="text"
                                    required
                                    onChange={(e) =>
                                        this.handleInput("imageURL", e.target.value)
                                    }
                                    value={this.state.registration.imageURL}
                                />
                            </Form.Group>
                            
                            <Button type="submit" disabled={!this.formIsValidated()}>
                                Submit
                            </Button>
                        </Form>
                    </>
                )}
            </div>
        );
    }
}

export default Edit;