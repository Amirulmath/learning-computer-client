import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import BlogPage from "../../Pages/BlogPage/BlogPage/BlogPage";
import CourseList from "../../Pages/CourseList/CourseList/CourseList";
import Courses from "../../Pages/Courses/Courses/Courses";
import FAQpage from "../../Pages/FAQpage/FAQpage/FAQpage";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://learning-computer-server.vercel.app/all-course')
            },
            {
                path: '/courseList/:id',
                element: <CourseList></CourseList>,
                loader: ({params}) => fetch(`https://learning-computer-server.vercel.app/list/${params.id}`)
            },
            {
                path: '/courses/:id',
                loader: ({params}) => fetch(`https://learning-computer-server.vercel.app/course/${params.id}`),
                element: <PrivateRoute><Courses></Courses></PrivateRoute>
            },
            {
                path: '/blog',
                element: <BlogPage></BlogPage>
            },
            {
                path: '/faq',
                element: <FAQpage></FAQpage>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }

        ]
    }
])