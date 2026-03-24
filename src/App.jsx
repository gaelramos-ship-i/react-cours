import Counter from "./components/counter"
import Users from "./components/users"
import Formulaire from "./components/formulaire"
import Weather from "./components/weather"
import Modal from "./components/modal"
import { useState } from "react"

function App(){
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <h1>Test</h1>
      <Counter />

      <button onClick={() => setIsOpen(true)}>
        Ouvrir la modale
      </button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2>Ma modale</h2>
        <p>Contenu de la modale</p>
      </Modal>

      <Formulaire />
      <Users />
      <Weather />
    </>
  )
}

export default App