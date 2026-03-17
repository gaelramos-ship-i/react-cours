import {useUsers } from "../hooks/useUsers"

function Users(){
    const{ users, loading, error } = useUsers()

    if (loading) return <p>Chargement...</p>;
    if (error) return <p>Erreur : {error}</p>;

    return (
        <ul>
            {users.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    )
}
export default Users