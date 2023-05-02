import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Dashboard from "../Pages/Dashboard/Dashboard";
import ECommerce from "../Pages/ECommerce/ECommerce";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children: [
            {
                path: "/",
                element: <Dashboard/>
            },
            {
                path: "/ecommerce",
                element: <ECommerce/>
            }
        ]
    }
])

export default router;