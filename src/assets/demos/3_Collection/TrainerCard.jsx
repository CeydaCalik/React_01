import style from './TrainerCard.module.css'

export const TrainerCard = (props) => {

    const { trainer } = props;

    const { id, firstname, lastname, gender, vacation, hobbies } = trainer;

    return (
        <>
            <div className={`${style.card} ${ gender === 'm' ? style.male : 
                                              gender === 'f' ? style.female : 
                                                               style.other}`}>

                <div className={style.hobbies}>
                    <h3>{firstname} {lastname}</h3>
                    <p>Ses hobbies sont :</p>
                    <ul>
                        {hobbies.map((hobby, index) => (<li key={index}> {hobby} </li>))}
                    </ul>
                    {vacation ?
                        <button disabled>🎆 En vacance 🎆</button>
                        :
                        <button> Sélectionner </button>
                    }
                </div>

            </div>
        </>
    )

}