
import style from './Exo1.module.css'


export const Exo_1Component = (props) => {

    const { name, age= '18' } = props;

    return (
        <>
        <p className={style['grey-text']}>Bienvenue {name} sur l'application React ! </p>
        <p className={style['litle-text']}>Vous avez {age} ans.</p>
        </>
    )

}