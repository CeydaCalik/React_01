import style from './Exo3.module.css'
import { Exo_3_Film } from './Exo_3_Film'

export const Exo_3 = () => {

    const films = [
        { id : 1, title : "Guardians of the Galaxy", director : "James Gunn", releaseDate : "08-13-2014", poster : "https://i.pinimg.com/1200x/8c/de/a4/8cdea4d78268ddab6ddfcf84146b74a0.jpg", rating : 4 },
        { id : 2, title : "Guardians of the Galaxy Vol. 2", director : "James Gunn", releaseDate : "04-05-2017", poster : "https://i.pinimg.com/736x/e7/85/58/e78558e7cf872f28ee0994748d578276.jpg", rating : 3 },
        { id : 3, title : "Guardians of the Galaxy Vol. 3", director : "James Gunn", releaseDate : "04-03-2023", poster : "https://i.pinimg.com/1200x/ff/9a/9c/ff9a9cd716135f585513d6e9886e5f9a.jpg", rating : 5 },
    ]


    return(
        <>
            <div>Films</div>
            <div className={style.films}>

                {films.map( film => ( <Exo_3_Film key={film.id} film={film} />))}


            </div>
        </>
    )


}