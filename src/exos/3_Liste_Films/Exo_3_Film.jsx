import style from "./Exo_3_Film.module.css"

const showHeart = (rating) => {

    const ratingTab = new Array(rating).fill('')
    const ratingTot  = new Array(5 - rating).fill('')
    
    return (
        <>
            {
                ratingTab.map((r, i) => ( <p key={i} className=''>⭐</p> )) 
            }
            { 
                ratingTot.map((r, i) => ( '🌑' ) )
            }
        </>
    )
}

export const Exo_3_Film = (props) => {

    const { film } = props;

    const { id, title, director, releaseDate, poster, rating } = film;
    console.log(rating);
    

    return (
        <>
            <div className={ `${ (rating === 5  && style.coupDeCoeur ) }`}>
                <div className={style.film}>
                    <div>
                        <h3 className={style.title}> {title} </h3>
                    </div>
                    <div>
                        <img src={poster} width="250px" height="300px" />
                    </div>
                    <p className={style.text}>
                        {director}
                    </p>
                    <p className={style.text}>
                        {releaseDate}
                    </p >
                    <p className={style.rating}>

                    { 
                        // Array.from({length : rating}).map( r => (<p className=''>💖</p>))
                        showHeart(rating)
                    }
                        
                    </p>
                    
                </div>

            </div>

        </>
    )



}

