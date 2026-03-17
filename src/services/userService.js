const API_URL = "https://jsonplaceholder.typicode.com/users"

export async function fetchUsers() {
    const req = await fetch (API_URL)

    if(!req.ok){
        throw new Error("Erreur lors de la récupération des users");
    }

    return req.json()
}