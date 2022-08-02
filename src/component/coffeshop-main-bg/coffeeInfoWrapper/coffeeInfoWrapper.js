import { useParams } from 'react-router-dom';
import '../../coffee-img.scss';
import coffeeimg from '../about/img/about-coffee.svg';
import './coffeeInfoWrapper.scss';


const CoffeeInfoWrapper = ({date}) => {
    const id = useParams();
    const elements = date.filter(item => item.id === +id.ourcoffeId)
        .map(item => { 
            return (
                <div className="coffeeinfowrapper">
                        <div className="coffeeinfowrapper__img">
                            <img src={item.img2} alt="aromistico" />
                        </div>
                    <div className="coffeeinfowrapper__text">
                        <h2 className="about__header">About It</h2>
                        <div className="wrapp">
                            <div className="vector vector_black"></div>
                            <img src={coffeeimg} alt="coffeeimg" className="coffee" />
                            <div className="vector vector_black"></div>
                        </div>
                        <div className="coffeeinfowrapper__country"><span>Country:</span> {item.country}</div>
                        <div className="coffeeinfowrapper__descr"><span>Description:</span> {item.descr} </div>
                        <div className="coffeeinfowrapper__price"><span>Price:</span> {item.price + '$'}</div>
                    </div>
                </div> 
            )
    })

    return (
        <div className="coffeeinfo">
            <div className="container">
                 {elements}
             </div>
         </div>
    )
   
}

export default CoffeeInfoWrapper;