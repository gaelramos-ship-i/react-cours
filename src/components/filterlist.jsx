import { useMemo, useState, useTransition } from "react";

function FilterList({ items }) {
    
    const [search, setSearch] = useState('')
    const [deferredSearch, setDeferredSearch] = useState('') // Non urgent (filtre)
    const [isPending, startTransition] = useTransition()
    

    const handleSearch = (e) => {
        const val = e.target.value
        setSearch(val) // Mise à jour immédiate (l'input reste fluide)

        startTransition(() => {
            // Mise à jour différée (le filtrage lourd s efera en tâche de fond)
            setDeferredSearch(val)
        })
    }

    // Le filtre ne sera recalculé QUI si 'items' ou 'search' change
    const itemsFilters =useMemo(() => {
        console.log("Calcul lourd en cours...")
        return items.filter(item => item.name.include(deferredSearch))
    }, [items, deferredSearch])

    return (
        <>
            <input type="text" value={search} onChange={handleSearch} />
            {isPending && <p>Filtrage en cours...</p>}
            <ul>
                {itemsFilters?.map(item =>
                    <li key={item.id}>{item.name}</li>
                )}
            </ul>
        </>
    )

    /* 
    Ce qui se passe : 
        1. `search` -> update immédiat (input fluide)
        2. `deferredSreach` -> update dans startTransition
        3. `useMemo` dépend de `deferredSearch`
        4. le filtrage lourd ne bloque plus le rendu
    */
}

export default FilterList