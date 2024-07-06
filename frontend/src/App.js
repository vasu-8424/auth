import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Otp from "./pages/otp";
// import TourOverView from "./pages/TourOverView";

function App() {
  const [name, setName] = useState(" ");
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Signup></Signup>} />
            <Route path="/login" element={<Login></Login>} />
            <Route path="/homepage" element={<Homepage></Homepage>} />
            <Route path="/otp" element={<Otp></Otp>} />
            {/* <Route path="/overview/:id" element={<TourOverView></TourOverView>} /> */}
          </Routes>
        </BrowserRouter>
        {/* <Signup></Signup> */}
      </div>
    </>
  );
}

export default App;