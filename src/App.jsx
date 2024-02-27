import "./App.css";
import { Header } from "./component/Header";
import { Layout } from "./component/Layout";
import { Post } from "./component/Post";
import { Routes, Route } from "react-router-dom";
import { IndexPage } from "./pages/IndexPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path={"/login"} element={<div>Login Page</div>} />
        <Route path={"/register"} element={<div>Register</div>} />
      </Route>
    </Routes>
  );
}

export default App;
