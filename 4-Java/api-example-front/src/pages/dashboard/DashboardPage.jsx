import { useAuth } from "../../app/state/auth.jsx"

export default function DashboardPage() {
    const { user } = useAuth()

    return (
        <div>
            Bem-vindo {JSON.stringify(user, null, 2)}
        </div>
    )
}