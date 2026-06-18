import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import UploadNews from "../pages/UploadNews";
import NewsList from "../pages/NewsList";
import Login from "../pages/Login";
import AccountManagement from "../pages/AccountManagement";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/news", element: <NewsList /> },
      { path: "/news/create", element: <UploadNews /> },
      { path: "/login", element: <Login /> },
      { path: "/admin/accounts", element: <AccountManagement /> }
    ]
  },
]);