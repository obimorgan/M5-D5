/** @format */
import "./App.css";
import Homepage from "./Components/Homepage/Homepage";
import NavBar from "./Components/NavBar/NavBar"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
      </Routes>
      <Homepage/>
    </BrowserRouter>
  );
}

export default App;
