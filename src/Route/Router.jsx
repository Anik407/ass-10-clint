import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import ChefDetails from "../Pages/Home/AllChef/ChefDetails/ChefDetails";
import ErrorPage from "../ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Blog from "../Pages/Blog/blog";
import Registration from "../Pages/Registration/Registration";
import PrivateRoute from "./PrivateRoute/PrivateRoute";




const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('https://ass-10-anik407.vercel.app/dashes')
            },
            {
                path: "/dashes/:id",
                element:<PrivateRoute> <ChefDetails></ChefDetails>,</PrivateRoute>,
                loader: ({ params }) => fetch(`https://ass-10-anik407.vercel.app/dashes/${params.id}`)
            },
            {
                path: "*",
                element: <ErrorPage></ErrorPage>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path :"/blog",
                element: <PrivateRoute><Blog></Blog></PrivateRoute>
            },
            {
                path: "/registration",
                element :<Registration></Registration>
            },
     


        ],
    },
]);

export default router;