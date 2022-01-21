import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./Create";
import { useState } from "react";

import Login from "./Login";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home isAuth={isAuth} />}></Route>
            <Route path="/create" element={<Create isAuth={isAuth} />}></Route>

            <Route
              path="/login"
              element={<Login setIsAuth={setIsAuth} />}
            ></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
