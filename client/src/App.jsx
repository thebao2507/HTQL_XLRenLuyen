import { useState } from 'react'
import './App.css'
import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom'
import Login from './pages/login/Login'
import ErrorPage from './pages/error-page/ErrorPage'
import Student from './pages/student-page/Student'


function App() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Login />,
            errorElement: <ErrorPage />,
        },
        {
            path: "/student",
            element: <Student />
        }
    ])

    return (
        <RouterProvider router={router} />
    )
}

export default App
