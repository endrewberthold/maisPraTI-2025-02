import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"
import { AuthProvider, useAuth } from "../state/auth.jsx"
import LoginPage from "../../pages/login/LoginPage.jsx"
import RegisterPage from "../../pages/register/RegisterPage.jsx"
import DashboardPage from "../../pages/dashboard/DashboardPage.jsx"

function PrivateRoute({ children }) {
    const { isAuthenticated } = useAuth()
    if(!isAuthenticated) return <Navigate to="/login" replace />
    return children
}

const router = createBrowserRouter([
    {
        path: "/login",
        element: <LoginPage />
    },
    {
        path: "/register",
        element: <RegisterPage />
    },
    {
        path: "/dashboard",
        element: (
            <PrivateRoute>
                <DashboardPage />
            </PrivateRoute>
        )
    }
])

export default function AppRouter() {
    return (
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    )
}