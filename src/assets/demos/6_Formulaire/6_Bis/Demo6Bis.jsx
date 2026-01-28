import { useState } from "react"

export const Demo6Bis = () => {

    const [splitForm, setSplitForm] = useState({
        bill: 0,
        nbPerson: 0,
        tips: 5
    });

    const [isValid, setIsValid] = useState(true);
    const [totalPerPerson, setTotalPerPerson] = useState();



    const handleField = (event) => {



        const name = event.target.name;
        console.log(name);

        const type = event.target.type;
        console.log(type);

        setSplitForm(prev => {
            const newSplitForm = {
                ...prev,
                [name] : (type === 'checkbox') ?
                    event.target.checked :
                    (type === 'number') ?
                        event.target.valueAsNumber :
                        event.target.value
            }
            return newSplitForm;
    })

    }

    const handleSubmit = (event) => {
        event.preventDefault(); //stop le rafraichissemen de page

        setTotalPerPerson(undefined);

        if (splitForm.bill > 0 && splitForm.nbPerson > 0) {
            setTotalPerPerson( (splitForm.bill + (splitForm.bill * splitForm.tips/ 100)) / splitForm.nbPerson)
            setIsValid(true);
        }
        else{
            setValid(false)
        }
    }


    return (
        <>
            <h2>Split O' Resto</h2>

            <form  onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="bill">Total de la note : </label>
                    <input id='bill' name="bill" type="number" value={splitForm.bill} onChange={handleField} />
                </div>

                <div>
                    <label htmlFor="nbPerson">Nombre total de personne : </label>
                    <input id='nbPerson' name="nbPerson" type="number" value={splitForm.nbPerson} onChange={handleField} />
                </div>

                <div>
                    <label htmlFor="tips">Pourboire : </label>
                    <select id='tips' name="tips" value={splitForm.tips} onChange={handleField}>

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
                { totalPerPerson && 
            <div>Vous devrez payer : {totalPerPerson.toFixed(2)} € par personne </div> }


        </>
    )
}