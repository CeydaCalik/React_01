import style from './Demo2.module.css'

export const Demo2 = (props) => {

    const { owner, havePet, name, image, type } = props


    if(!havePet){

            return (
                <div className={style.nopet}>
                    <p> Oh non {owner} n'a pas d'animal</p>
                    < a href="https://www.spa-charleroi.be/" >
                    Cliquez ici pour en adopter un ✅
                    </a>
                </div>
        )
    }
    return (
                
                <div className={style.pet}>
                    <p>{owner}, parle moi de ton animal 😌</p>
                </div>
    )
}