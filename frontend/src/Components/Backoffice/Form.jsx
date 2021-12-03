
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from 'react'
import { Container } from "react-bootstrap";


const Edit = () => {
    const [state, setState] = useState({
        name: "",
        description: "",
        brand: "",
        price: "",
        category: "",
        startDate: new Date(),
        updatedDate: new Date()
    })
    const [image, setImage] = useState(null)

    useEffect(() => {
        postInfo()
    }, [])

    const postInfo = async () => {

        try {
            const response = await fetch(
                "https://striveschool-api.herokuapp.com/api/product/",
                {
                    method: "POST",
                    body: JSON.stringify(state),
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${process.env.REACT_APP_JWT_TOKEN}`
                    },
                }
            );
            if (!response.ok) {
                throw new Error("fail to fetch");

            } else {
                const fd = new FormData();
                fd.append("post");

                let response = await fetch(
                    "https://striveschool-api.herokuapp.com/api/product/",
                    {
                        method: "POST",
                        body: fd,
                        headers: {
                            Authorization:
                                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTljOWYyM2QzNzU4MDAwMTU0OWI5ZmYiLCJpYXQiOjE2Mzc5MjM5MTgsImV4cCI6MTYzOTEzMzUxOH0.33s9YKpvuar5K-gBELToRiix85OjS-TqkNpP5NUNcto",
                        },
                    }
                );
                alert("Image uploaded");
            }
        } catch (error) {
            alert(error)
        }
    };

    return (

        <Container>

            <h3 className="mt-5">Product Edit</h3>
            <div className="border-top"></div>
            <div className="mt-5">
            <Form>
                <Form.Group >
                    <Form.Control
                        type="text"
                        placeholder="Name"
                        value={state.name}
                        onChange={e =>
                            setState({
                                ...state,
                                name: e.target.value
                            })}
                    />
                </Form.Group>
                <Form.Group >
                    <Form.Control
                        type="text"
                        placeholder="brand"
                        value={state.brand}
                        onChange={e =>
                            setState({
                                ...state,
                                brand: e.target.value
                            })}
                    />
                </Form.Group>
                <Form.Group >
                    <Form.Control
                        type="text"
                        placeholder="price"
                        value={state.price}
                        onChange={e =>
                            setState({
                                ...state,
                                price: e.target.value
                            })}
                    />
                </Form.Group>
                <Form.Group >
                    <Form.Control
                        type="text"
                        placeholder="description"
                        value={state.description}
                        onChange={e =>
                            setState({
                                ...state,
                                description: e.target.value
                            })}
                    />
                </Form.Group>
                <Form.Group >
                    <Form.Control
                        type="text"
                        placeholder="category"
                        value={state.category}
                        onChange={e =>
                            setState({
                                ...state,
                                category: e.target.value
                            })}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.File id="exampleFormControlFile1" label="Example file input" />
                </Form.Group>
                <Button variant="primary" onClick={postInfo}>
                    Submit
                </Button>

            </Form>
            </div>
        </Container>
    )

}

export default Edit



// class Edit extends Component {
//     state = {
//         registration: {
//             name: "",
//             description: "",
//             brand: "",
//             category: "",
//             price: "",
//             imageURL: "",

//         },
//         showComplete: false,
//     };

//     handleInput = (key, value) => {
//         this.setState({
//             registration: {
//                 ...this.state.registration,
//                 [key]: value,
//             },
//         });
//     };

//     // formIsValidated = () => {
//     //     let isValidated = false;
//     //     if (
//     //         this.state.registration.name.length >= 2 &&
//     //         this.state.registration.brand.length >= 3 &&

//     //     ) {
//     //         isValidated = true;
//     //     }
//     //     return isValidated;
//     // };

//     handleRegistration = (e) => {
//         e.preventDefault();
//         this.setState({
//             showComplete: true,
//         });
//     };

//     render() {
//         return (
//             <div
//                 className="d-flex flex-column align-items-center mt-5"
//                 style={{ color: "white" }}
//             >
//                 {this.state.showComplete ? (
//                     <>
//                         <h1>Registration complete!</h1>
//                         <h3>Your details:</h3>
//                         <p>{this.state.registration.name}</p>
//                         <p>{this.state.registration.description}</p>
//                         <p>{this.state.registration.brand}</p>
//                         <p>{this.state.registration.category}</p>
//                         <p>{this.state.registration.price}</p>
//                         <p>{this.state.registration.imageURL}</p>

//                     </>
//                 ) : (
//                     <>
//                         <h1>......</h1>
//                         <Form onSubmit={this.handleRegistration}>
//                             <Form.Group>
//                                 <Form.Label>Name</Form.Label>
//                                 <Form.Control
//                                     type="text"
//                                     required
//                                     onChange={(e) => this.handleInput("name", e.target.value)}
//                                     value={this.state.registration.name}
//                                 />
//                             </Form.Group>
//                             <Form.Group>
//                                 <Form.Label>Surname</Form.Label>
//                                 <Form.Control
//                                     type="text"
//                                     required
//                                     onChange={(e) => this.handleInput("description", e.target.value)}
//                                     value={this.state.registration.description}
//                                 />
//                             </Form.Group>
//                             <Form.Group>
//                                 <Form.Label>Email</Form.Label>
//                                 <Form.Control
//                                     type="email"
//                                     required
//                                     onChange={(e) => this.handleInput("brand", e.target.value)}
//                                     value={this.state.registration.brand}
//                                 />
//                             </Form.Group>
//                             <Form.Group>
//                                 <Form.Label>Password</Form.Label>
//                                 <Form.Control
//                                     type="password"
//                                     required
//                                     onChange={(e) => this.handleInput("category", e.target.value)}
//                                     value={this.state.registration.category}
//                                 />
//                             </Form.Group>
//                             <Form.Group>
//                                 <Form.Label>Year of Birth</Form.Label>
//                                 <Form.Control
//                                     type="number"
//                                     required
//                                     onChange={(e) =>
//                                         this.handleInput("price", e.target.value)
//                                     }
//                                     value={this.state.registration.price}
//                                 />
//                             </Form.Group>
//                             <Form.Group>
//                                 <Form.Label>Street Address</Form.Label>
//                                 <Form.Control
//                                     type="text"
//                                     required
//                                     onChange={(e) =>
//                                         this.handleInput("imageURL", e.target.value)
//                                     }
//                                     value={this.state.registration.imageURL}
//                                 />
//                             </Form.Group>

//                             <Button type="submit" disabled={!this.formIsValidated()}>
//                                 Submit
//                             </Button>
//                         </Form>
//                     </>
//                 )}
//             </div>
//         );
//     }
// }

// export default Edit;