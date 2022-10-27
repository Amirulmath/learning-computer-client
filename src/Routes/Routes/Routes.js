import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import BlogPage from "../../Pages/BlogPage/BlogPage/BlogPage";
import CourseList from "../../Pages/CourseList/CourseList/CourseList";
import Courses from "../../Pages/Courses/Courses/Courses";
import FAQpage from "../../Pages/FAQpage/FAQpage/FAQpage";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/all-course')
            },
            {
                path: '/courseList/:id',
                element: <CourseList></CourseList>,
                loader: ({params}) => fetch(`http://localhost:5000/list/${params.id}`)
            },
            {
                path: '/courses/:id',
                element: <Courses></Courses>,
                loader: ({params}) => fetch(`http://localhost:5000/course/${params.id}`)
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