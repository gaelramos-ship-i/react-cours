import { useCounter } from "../store/counterStore"

function Counter(){
    const counter = useCounter((state) => state.counter)
    const increaseCount = useCounter((state) => state.increaseCount)
    const decreaseCount = useCounter((state) => state.decreaseCount)
    const updateCounter = useCounter((state) => state.updateCounter)

    return(
        <div>
            <button onClick={increaseCount}>Plus 1</button>
            <button onClick={decreaseCount}>Moins 1</button>
            <button onClick={() => updateCounter(12)}>Initialise à 12</button>
            <p>Vous avez cliqué {counter} fois</p>
        </div>
    )
}

export default Counter