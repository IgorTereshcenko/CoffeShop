
import './best.scss';

const Best = ({bestCoffe}) => {
    
    const coffeBestCard = bestCoffe.map(({name,price,img}) => {
        return (
            <div className="best__card">
                <img src={img} alt="coffeimg" className="best__img" />
                <div className="best__title">{name}</div>
                <div className="best__price">{price + '$'}</div>
            </div>      
        )
    })
    
    return (
        <div className="best">
            <div className="container">
                <h2 className="best__header">Our best</h2>
                <div className="best__wrapper">
                     {coffeBestCard}
                </div>
            </div>
        </div>
    )
}

export default Best;