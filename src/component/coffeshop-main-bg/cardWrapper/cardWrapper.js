import { Link } from "react-router-dom/cjs/react-router-dom.min";
import './cardWrapper.scss';

const CardWrapper = ({date}) => {
    const elements = date.map(item => {
        
        return (
            <Link to = {`ourcoffe/${item.id}`}  className="card">
                <div className="card__imgcard">
                    <img src={item.img} alt="" />
                </div>
                <div className="card__title">{item.name}</div>
                <div className="card__country">{item.country}</div>
                <div className="card__price">{item.price + '$'}</div>
             </Link>       
        )
    })
    
    return (
        <div className="container">
            <div className="cardwrapper">
                {elements}
            </div>
        </div>
       
    )
   
}

export default CardWrapper;