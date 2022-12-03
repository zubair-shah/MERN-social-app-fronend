import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { Users, Admin, SignUp, Login } from "./screens";
import { useDispatch } from "react-redux";
import { getPosts } from "./redux/actions/posts";
function App() {
  const [currentId, setCurrentId] = useState(null);

  const dispatch = useDispatch();
  console.log(currentId);
  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Users />} />
        <Route path={"/user"} element={<Admin />} />
        <Route path={"/signup"} element={<SignUp />} />
        <Route path={"/login"} element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
