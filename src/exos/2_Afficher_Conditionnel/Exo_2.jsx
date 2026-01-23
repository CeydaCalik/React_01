import style from './Exo2.module.css'


export const Exo_2 = (props) => {

    const { isAvailable, name, image, description, price, promoPrice } = props;

    if (!isAvailable) {
        return (
            <div className={style.products}>
                <div className={style.noProduct}>
                    <img src="https://static.vecteezy.com/ti/vecteur-libre/p1/23104160-ne-pas-disponible-caoutchouc-timbre-joint-vecteur-vectoriel.jpg" height="250px" width="250px" />
                <div>
                    <p>This product |{name}| is not available</p>

                </div>
                </div>

            </div>
        )
    }


    return (
        <div className= {style.products}>
            <div className= {style.product}>

            <div className={style.productPic}>
                <img height="250px" width="250px" src={image} />
            </div>
            <div className={style.productInfo}>
                <p>
                    {name}
                </p>
                <p>
                    {description}
                </p>
                <p>
                    {(!promoPrice)?`Voici le prix de base : ${price}` :`PROMO :  ${promoPrice}`}
                </p>
               
            </div>
            </div>
        </div>
    )



}