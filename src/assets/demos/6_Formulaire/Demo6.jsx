import { useState } from 'react'
import style from './Demo6.module.css'

export const Demo6 = () => {

    // une valeur va changer dans une variable et elle doit être affciher sur la page

    const [bill, setBill] = useState(0);
    const [nbPerson, setNbPerson] = useState(0);
    const [tips, setTips] = useState(5);
    const [isValid, setValid] = useState(true);

    const [totalPerPerson, setTotalPerPerson] = useState(0);



    const handleSubmit = (event) => {

        event.preventDefault(); //stop le rafraichissemen de page

        setTotalPerPerson(undefined);

        if (bill > 0 && nbPerson > 0) {
            setTotalPerPerson( (bill + (bill * tips/ 100)) / nbPerson)
            setValid(true);
        }
        else{
            setValid(false)
        }



    }


    return (    
        <>
            <h2>Split 'O Resto</h2>

            <form onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="bill">Total de la note : </label>
                    <input  id='bill' type="number" value={bill} onChange={ (event) => setBill(event.target.valueAsNumber) }/>
                </div>

                <div>
                    <label htmlFor="nbPerson">Nombre total de personne : </label>
                    <input  id='nbPerson' type="number" value={nbPerson} onChange={ (event) => setNbPerson(event.target.valueAsNumber) } />
                </div>

                <div>
                    <label htmlFor="tips">Pourboire : </label>
                    <select  id='tips' value={tips} onChange={(event) => setTips(event.target.value)}>

                        <option value={0}>Aucun</option>
                        <option value={5}>5%</option>
                        <option value={10}>10%</option>
                        <option value={15}>15%</option>
                    </select>
                </div>

                <button>Split 🧮</button>
                {
                    !isValid && <span> ⚠️ Vous devez metre une note et un nombre de personne positif </span>
                }

            </form>

            <div>Vous devrez payer : {totalPerPerson.toFixed(2)} par personne </div>
        </>
    )

}