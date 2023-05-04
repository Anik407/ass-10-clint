import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import ChefDetails from "../Pages/Home/AllChef/ChefDetails/ChefDetails";
import ErrorPage from "../ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Blog from "../Pages/Blog/blog";
import Registration from "../Pages/Registration/Registration";




const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('https://ass-10-anik407.vercel.app/dashes')
            },
            {
                path: "/dashes/:id",
                element: <ChefDetails></ChefDetails>,
                loader: ({ params }) => fetch(`https://ass-10-anik407.vercel.app/dashes/${params.id}`)
            },
          
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path :"/blog",
                element: <Blog></Blog>
            },
            {
                path: "/registration",
                element :<Registration></Registration>
            }


        ],
    },
]);

export default router;