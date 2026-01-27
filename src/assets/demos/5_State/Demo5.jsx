import { useState } from "react"



export const Demo5 = () => {


   const [ count, setCount ] = useState(0);
   const [ firstname, setFirstname ] = useState('Jack');

   const increment = () => {
    // setCount(10)
    setCount( (prev) => { return prev + 1} )

   }
   const decrement = () => {
    setCount( (prev) => { return prev - 1} )

   }

   const crement = (value) => {
    setCount( (prev) => { return prev + value } )
   }

    return (
        <>
        <div className="flex flex-row justify-center items-center gap-3">
            <h2>Gestion du state</h2>
            <button onClick={() => crement(-1)}>➖</button>
            <p>
            {count}
            </p>
            <button onClick={() => crement(1)}>➕</button>
        </div>

        <div className="flex flex-row justify-center items-center gap-3">

            <h3>{ firstname } 🦜🏴‍☠️⛵ </h3>
        </div>

        <div className="flex flex-row justify-center items-center gap-3">
            <button onClick={ () => setFirstname( prev => prev.toUpperCase() ) }>🔊</button>
            <button onClick={ () => setFirstname( prev => prev.toLowerCase() ) }>🔉</button>
            <button onClick={ () => setFirstname( ' Que cette journée reste à jamais celle où vous avez failli capturer le capitaine Jack Sparrow ! ' ) }>🔈</button>
            <button onClick={ () => setFirstname( 'Jack' ) }>🏴‍☠️</button>
        </div>
        </>
    )

}