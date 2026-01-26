


export const Demo4 = () => {

    let count = 0;

    const incresement = () => {
        count++;
        console.log(count);
        
    }

    const decrement = () => {
        count--;
    }

    return (
        <>
        <div>
            <h3>Les events</h3>

            <div>
                <button onClick={decrement}>➖</button>
                <p>{count}</p>
                <button onClick={incresement}>➕</button>
                
                
            </div>
        </div>
        
        </>
    )

} 