import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import CourseList from "../../Pages/CourseList/CourseList/CourseList";
import Courses from "../../Pages/Courses/Courses/Courses";
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
                path: '/courseList/:id',
                element: <CourseList></CourseList>,
                loader: ({params}) => fetch(`http://localhost:5000/list/${params.id}`)
            },
            {
                path: '/courses/:id',
                element: <Courses></Courses>
            }
        ]
    }
])