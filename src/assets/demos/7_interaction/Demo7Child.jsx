import style from './Demo7.module.css'
export const Demo7Child = (props) => {

    const { child, onAdoptReveal } = props;
    const { id, name, skin, adopted } = child;

    return (
        <>
            <h3 className={style.enfant}>
                {skin} : Je suis {name} !</h3>

            {adopted ?
                <span>Je suis adopté</span> :

                <button onClick={() => { onAdoptReveal(id) }}>Annoncer que je suis adopté</button>
            }

        </>
    )
}