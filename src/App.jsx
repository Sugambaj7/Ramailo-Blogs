import "./App.css";
import { Header } from "./component/HeaderComponent";
import { Layout } from "./component/Layout";
import { Post } from "./component/PostComponent";
import { Routes, Route, Navigate } from "react-router-dom";
import { IndexPage } from "./pages/IndexPage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { UserContextProvider } from "./UserContext";
import { CreatePost } from "./pages/CreatePost";
import { PostPage } from "./pages/PostPage";
import { EditPost } from "./pages/EditPost";
import { DeletePost } from "./pages/DeletePost";
import Category from "./component/Category";
// import AdminLayout from "./component/AdminLayout";

import Protected from "../protectedRoute/Protected";
import DashboardPage from "./pages/DashboardPage";
import AdminDashboardSideNav from "./component/AdminDashboardSideNav";
import UsersComponent from "./component/UsersComponent";
import AdminLanding from "./component/AdminLanding";
import BlogsComponent from "./component/BlogsComponent";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path={"/login"} element={<LoginPage />} />
        <Route path={"/register"} element={<RegisterPage />} />

        <Route
          path={"/dashboard"}
          element={
            <Protected>
              <DashboardPage />
            </Protected>
          }
        >
          <Route path={"/dashboard"} element={<AdminLanding />} />
          <Route path={"/dashboard/users"} element={<UsersComponent />} />
          <Route path={"/dashboard/blogs"} element={<BlogsComponent />} />
        </Route>

        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path={"/create"} element={<CreatePost />} />
          <Route path={"/post/:id"} element={<PostPage />} />
          <Route path={"/post/edit/:id"} element={<EditPost />} />
          <Route path={"/post/delete/:id"} element={<DeletePost />} />
          <Route path={"/category/:category"} element={<Category />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
