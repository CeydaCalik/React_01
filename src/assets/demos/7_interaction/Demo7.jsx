import {useState } from 'react'
import style from './Demo7.module.css'
import { Demo7Child } from './Demo7Child'

export const Demo7 = () => {

    const [children, setChildren] = useState([
        { id: 1, name: 'Bidule1', skin: '👳🏻‍♂️', adopted: false },
        { id: 2, name: 'Bidule2', skin: '👳🏻‍♂️', adopted: false },
        { id: 3, name: 'Bidule3', skin: '👨🏻‍🦱', adopted: true }
    ])

    const changeAdoptionStatus = (id) => {

        const newChildren = children.map(child => {
            if (child.id === id) {
                child.adopted = true;
                return child;
            }
            else {
                return child;
            }

            
        });
        setChildren(newChildren);
    }

        return (
            <>
                <h2 className={style.parent}>Je suis le parent 😺🎩</h2>
                <div className={style.pic}>

                    <p>Photo de famille</p>
                    <img src='https://static.wikia.nocookie.net/the-jh-movie-collection-official/images/2/27/Thing1%262.jpeg' alt='photo de famille' width='250px' height='200' />

                </div>
                <p>Voici la liste de mes enfants : </p>
                {
                    children.map(child => <Demo7Child key={child.id} child={child} onAdoptReveal={changeAdoptionStatus} />)
                }
            </>

        )

   

}
