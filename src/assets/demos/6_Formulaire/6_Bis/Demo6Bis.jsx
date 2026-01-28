import { useState } from "react"

export const Demo6Bis = () => {

    const [splitForm ,setSplitForm ] = useState({
        bill : 0,
        nbPerson : 0,
        tips : 5
    });

    const [isValid, setIsValid] = useState(true);
    const [totalPerPerson, setTotalPerPerson] = useState();

    const handleField = (event) => {
        console.log(event.target.name);
        console.log(event.target.type);
        
        
    }


    return (    
        <>
            <h2>Split O' Resto</h2>

            <form >

                <div>
                    <label htmlFor="bill">Total de la note : </label>
                    <input  id='bill'  name="bill" type="number" value={splitForm.bill} onChange={handleField}/>
                </div>

                <div>
                    <label htmlFor="nbPerson">Nombre total de personne : </label>
                    <input  id='nbPerson' name="nbPerson" type="number" value={splitForm.nbPerson}  onChange={handleField}/>
                </div>

                <div>
                    <label htmlFor="tips">Pourboire : </label>
                    <select  id='tips' name="tips" value={splitForm} onChange={handleField}>

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