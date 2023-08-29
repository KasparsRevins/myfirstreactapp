import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import About from "./About/About";
import Login from "./Login/Login";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>
    },

    {
        path: "/About",
        element: <About/>
    },

    {
        path: "/Login",
        element: <Login/>
    }
])