
import { createBrowserRouter } from "react-router-dom";
import Home from "../page/home";
import Explore from "../page/explore";
import Notifications from "../page/notifications";
import NotFound from "../page/notFound";
import MainLayout from "../layouts/main";



const routes = createBrowserRouter([
    {
        path : '/',
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path : 'explore',
                element: <Explore/>
            },
            {
                path : 'notifications',
                element: <Notifications/>
            },
            {
                path:'*',
                element: <NotFound/>
            }
        ]
    },
    
])


export default routes;