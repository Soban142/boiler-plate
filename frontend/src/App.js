import RequireAuth from "./components/RequireAuth";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route element={<RequireAuth />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="signup" element={<Register />} />
          <Route path="signin" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
