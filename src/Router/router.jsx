import {createBrowserRouter} from "react-router-dom";
import App from "../App"
import Home from "../pages/home/Home";
import About from "../pages/miniPages/About";
import PrivacyPolicy from "../pages/miniPages/Privacy-policy";
import Contact from "../pages/miniPages/Contact";
import SingleBlog from "../pages/Blogs/Sigleblog/SingleBlog";
import Login from "../pages/user/Login";
import AdminLayout from "../pages/Blogs/Admin/AdminLayout";
import Register from "../pages/user/Register";
import Dashboard from "../pages/Blogs/Admin/dashboard/dashboard";
import AddPost from "../pages/Blogs/Admin/post/AddPost";
import ManagePosts from "../pages/Blogs/Admin/post/ManagePosts";
import Users from "../pages/Blogs/Admin/Users/users";
import Privaterouter from "./Privaterouter";
import UpdatePost from "../pages/Blogs/Admin/post/updatePost";
const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children :[
        {
            path : "/",
            element:<Home />,
        },
        {
          path:"/about",
          element:<About />,
        },
        {
          path:"/privacy",
          element:<PrivacyPolicy />,
        },
        {
          path : "/contact",
          element:<Contact />,
        },
        {
          path:"blogs/:id",
          element:<SingleBlog />,
        },
        {
          path:"/login",
          element:<Login />
        },
        {
          path:"/register",
          element:<Register />,
        },
        {
          path : "/dashboard",
          element:<Privaterouter><AdminLayout /></Privaterouter>,
          children :[
            {
              path : '',
              element : <Dashboard />
            },
            {
              path : 'add-new-post',
              element : <AddPost />
            },
            {
              path : 'manage-items',
              element : <ManagePosts />
            },
            {
              path : 'users',
              element : <Users />
            },
            {
              path : 'update-post/:id',
              element : <UpdatePost />
            }
          ]
        }
        ]
    },
  ]);
export default router;