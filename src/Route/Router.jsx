import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import ChefDetails from "../Pages/Home/AllChef/ChefDetails/ChefDetails";
import ErrorPage from "../ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";




const router = createBrowserRouter([
    {
        path: "/",
        element:<Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('https://ass-10-anik407.vercel.app/dashes')
            },
            {
                path:"/dashes/:id",
                element :<ChefDetails></ChefDetails>,
                loader : ({params})=>fetch(`https://ass-10-anik407.vercel.app/dashes/${params.id}`)
            },
            {
                path:"*",
                element : <ErrorPage></ErrorPage>
            },{
                path : "/login",
                element : <Login></Login>
            }


        ],
    },
]);

export default router;