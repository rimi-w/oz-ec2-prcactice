import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.jsx";
import ShopPage from "./pages/ShopPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "/",
    Component: Header,
    children: [
      { path: "shop", Component: ShopPage },
      { path: "profile", Component: ProfilePage },
    ],
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
