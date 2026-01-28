import { useState } from "react"
import { useForm } from "react-hook-form";


export const Demo6Lib = () => {

const [ totalPerPerson, setTotalPerPerson ] = useState();

const { register, handleSubmit, formState : { errors }, reset} = useForm( {mode : 'onChange',
                                                                    defaultValues : {
                                                                        bill : 0,
                                                                        nbPerson : 0,
                                                                        tips : 5
                                                                        }});

const splitBill = (data) => {
    console.log(data);

    setTotalPerPerson( (data.bill + (data.bill * data.tips/100))/data.nbPerson);
    // reset(); -> Vide les champs du formulaire après validation
}




    return (
        <>
            <h2>Split O' Resto</h2>

            <form onSubmit={handleSubmit(splitBill, () => setTotalPerPerson(undefined))}>

                <div>
                    <label htmlFor="bill">Total de la note : </label>
                    <input id='bill' name="bill" type="number" 
                    {... register ('bill', { valueAsNumber : true, required : true, min : 10})} />

                    {
                        errors['bill']?.type === 'required' &&
                        <span>
                            Ce champs est requis
                        </span>
                    }
                    {
                        errors['bill']?.type === 'min' &&
                        <span>
                            Vous devez remplir une valeur 
                        </span>
                    }
                </div>

                <div>
                    <label htmlFor="nbPerson">Nombre total de personne : </label>
                    <input id='nbPerson' name="nbPerson" type="number" 
                    {... register ('nbPerson', { valueAsNumber : true, required : true, min : 1})} />

                    {
                        errors['nbPerson']?.type === 'required' &&
                        <span> Ce champs est requis</span>
                    }

                    {
                        errors['nbPerson']?.type === 'min' &&
                        <span> Vous devez être au moins une personne</span>
                    }
                </div>

                <div>
                    <label htmlFor="tips">Pourboire : </label>
                    <select id='tips' name="tips" 
                    {... register ('tips', { valueAsNumber : true, required : true })}>

                        <option value={0}>Aucun</option>
                        <option value={5}>5%</option>
                        <option value={10}>10%</option>
                        <option value={15}>15%</option>
                    </select>
                </div>

                <button>Split 🧮</button>

            

            </form>
                { totalPerPerson && 
            <div>Vous devrez payer : {totalPerPerson.toFixed(2)} € par personne </div> }


        </>
    )


}