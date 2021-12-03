/** @format */
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css'
import Homepage from "./Components/Homepage/Homepage";
import NavBar from "./Components/NavBar/NavBar"
import SingleProductPage from "./Components/Products/SingleProductPage"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/single-product" exact={true} element={<SingleProductPage/>}></Route>
        <Route path="/back-office" exact={true} element={<SingleProductPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
