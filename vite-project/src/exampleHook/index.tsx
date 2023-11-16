import { useState } from "react"

const ExampleHook = () => {
    const [value, setValue] = useState(0)
    const [name, setName] = useState('Gonzalo')
    // const [isLoading, setIsLoading] = useState(true)
    
    const incrementHandler = () => {
        setValue(value + 1)
    }

    const descontarHandler = () => {
        if (value > 10) {
            setValue(value - 1)
        }
    }

    return (
        <>
            <h1>ExampleHook</h1>
            <h4>El valor del contador es: {value}</h4>
            <button onClick={incrementHandler}>Incrementar</button>
            <button onClick={descontarHandler}>Descontar</button>
            <h2>El nombre es: {name}</h2>
            <button onClick={() => setName('Pepe')}>Cambiar nombre</button>
            {/* {isLoading && <h1>Cargando...</h1>}
            {!isLoading && <h1>Ya cargó</h1>} */}
        </>
    )
}

export default ExampleHook