import { useEffect, useState } from "react"
import { fetchUsers } from "../services/userService"

export function useUsers(){
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function loadUsers() {
            try {
                const data = await fetchUsers()
                setUsers(data)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        loadUsers()
    }, [])

    return { users, loading, error }
}