import { useState } from 'react'
import style from './Exo4.module.css'

export const Exo_4 = () => {


    const [miams, setMiams ] = useState([
        { id: 1, name: "Burger Cheese", price: 8.50, quantity : 0 },

        { id: 2, name: "Burger Chicken", price: 11, quantity : 0  },

        { id: 3, name: "Burger Triple", price: 12.50, quantity : 0  },

        { id: 4, name: "Petite Frite", price: 3.50, quantity : 0  },

        { id: 5, name: "Moyenne Frite", price: 4.50, quantity : 0  },

        { id: 6, name: "Grande Frite", price: 6, quantity : 0  }

    ]);

    const [total, setTotal] = useState(0);

    const crement = (id, value) => {
        
        const newMiams = miams.map(miam => {
            if(miam.id === id) {
                miam.quantity += value;
                return miam;
            }
            else {
                return miam;
            }
        });

        setMiams(newMiams);

        newTotal();

        //todo recalculer le total et modifier la valeur du total avec setTotal
        // boucle, ou reduce, soit rajouter/enlever le prix à chaque click 
    }

    const newTotal = () => {

        //! v1
        
        // let stockTot = 0;
        // miams.forEach(miam => {
            //     stockTot += miam.price * miam.quantity
            // });
            
            //! v2

        const stockTot = miams.reduce( (acc, miam) => { return acc + miam.price * miam.quantity }, 0);
        //     console.log(stockTot);
            
            

        setTotal(stockTot);
    };


    return (
        <>
            <div className={style.board}>
                <div className={style.indv}>

                    {miams.map(miam => (<p key={miam.id}>
                        <span>{miam.name}</span>
                        <span>{miam.price} €</span>
                        <button onClick={() => crement(miam.id,-1)}>➖</button>
                        <span>{miam.quantity}</span>
                        <button onClick={() => crement(miam.id,1)}>➕</button>
                    </p>))}




                </div>
                <p>TOTAL : {total}</p>
            </div>

        </>
    )

}