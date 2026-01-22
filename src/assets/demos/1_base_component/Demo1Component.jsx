import './Demo1.css';

import style from './Demo1.module.css';

export const Demo1Component = (props) => {

    const {name = '... Cours ....', type = '... Domaine ...', difficulty= '... 0 ....' } = props;

    return (
        <>
        <p className={style['grey-text']}>Bienvenue au cours de  {name} qui est du {type}</p>
        <p>Difficulté : {difficulty}/5</p>
        </>
    );
}


