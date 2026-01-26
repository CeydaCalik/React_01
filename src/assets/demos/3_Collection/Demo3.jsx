import { TrainerCard } from "./TrainerCard"
import style from './Demo3.module.css'


export const Demo3 = () => {

    const trainers = [
        { id: 1, firstname: "Stiles", lastname: "Stilinski", gender: "m", vacation: false, hobbies: ["reading", "running", "sarcasm"] },
        { id: 2, firstname: "Scott", lastname: "McCall", gender: "m", vacation: false, hobbies: ["sleeping", "running", "drama"] },
        { id: 3, firstname: "Derek", lastname: "Hale", gender: "m", vacation: false, hobbies: ["fighting", "running", "turning people"] },
        { id: 4, firstname: "Allison", lastname: "Argent", gender: "f", vacation: true, hobbies: ["fighting", "running", "archery"] }
    ]



    return (
        <>
            <div>Le tableau</div>

            <div className="flex flex-row justify-center items-center gap-3">

                {trainers.map(trainer => (<p key={trainer.id}> {trainer.firstname}</p>))}

                { trainers.map( trainer => ( <TrainerCard key={trainer.id} trainer={trainer} /> ) ) }

            </div>
        </>
        //
    )
}