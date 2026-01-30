import { useState } from 'react';
import style from './Exo5.module.css'

export const Exo_5 = () => {

    const [firstNumber, setFirstNumber] = useState(0);
    const [secondNumber, setSecondNumber] = useState(0);
    const [operation, setOperation] = useState('+');

    const [total, setTotal] = useState(0);



    const submit = (event) => {
        event.preventDefault();

        setTotal(undefined);
        switch (operation) {
            case '+':

                setTotal(firstNumber + secondNumber )

                break;
            case '-':

                setTotal(firstNumber - secondNumber)

                break;
            case 'x':

                setTotal(firstNumber * secondNumber)

                break;
            case '/':

                setTotal(firstNumber / secondNumber)

                break;

        }

        
        



    }

    return (
        <>

            <h2>Calculatrice</h2>

            <form onSubmit={submit}>


                <div className={style.comp}>

                    <div className={style.all}>
                    <div className={style.number} >
                        <label htmlFor="number">Nb1 : </label>
                        <input id="number" type="number" value={firstNumber} onChange={(event) => setFirstNumber(event.target.valueAsNumber)} />
                    </div>

                        <label  id='operration' htmlFor="operation" className={style.number} >Opération : </label>
                        <select value={operation} onChange={(event) => setOperation(event.target.value)} >


                            <optgroup> 
                                <option value='+'>+</option>
                                <option value='-'>-</option>
                                <option value='x'>x</option>
                                <option value='/'>/</option>
                            </optgroup>
                        </select>

                        <div className={style.number}>
                            <label htmlFor="number">Nb2 : </label>
                            <input  id='operation' type="number" value={secondNumber} onChange={(event) => setSecondNumber(event.target.valueAsNumber)} />
                        </div>



                        <button >Calculer</button>
                        <p className={style.number}>
                            La réponse est : {total}
                            {console.log(total)}
                            
                        </p>

                    </div>

                </div>
            </form>
        </>
    )
}