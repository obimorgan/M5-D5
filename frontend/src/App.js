import "./App.css";
import Edit from "./Components/Backoffice/Form";
import 'bootstrap/dist/css/bootstrap.css'
import Homepage from "./Components/Homepage/Homepage";
import SingleProductPage from "./Components/Products/SingleProductPage"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/single-product" exact={true} element={<SingleProductPage/>}></Route>
        <Route path="/single-product/back-office" exact={true} element={<Edit/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
