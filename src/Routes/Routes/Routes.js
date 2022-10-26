import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Courses from "../../Pages/Courses/Courses/Courses";
import CoursList from "../../Pages/CoursList/CoursList/CoursList";
import Home from "../../Pages/Home/Home/Home";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/coursList/:id',
                element: <CoursList></CoursList>
            },
            {
                path: '/courses/:id',
                element: <Courses></Courses>
            }
        ]
    }
])