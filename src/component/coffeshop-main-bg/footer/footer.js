import logo from '../footer/img/footer-logo.svg';
import { Link } from 'react-router-dom';
import '../../menu.scss';
import "./footer.scss";
import coffeeimg from '../about/img/about-coffee.svg';
import '../../coffee-img.scss';
import '../about/about.scss';


const Footer = () => {
    return (
        <div className="footer">
            <div className="container2">
                <div className="menuwrapper">
                <img className='logo logo_black'  src={logo} alt="logo" />
                    <ul className='menu menu_black'>
                        <li><Link className='items items_black' to='/'>Coffee house</Link></li>
                        <li><Link className='items items_black' to='/ourcoffe'>Our coffee</Link></li>
                    </ul>
                </div>
                    <div className="wrapp">
                        <div className="vector vector_black"></div>
                        <img src={coffeeimg} alt="coffeeimg" className="coffee" />
                        <div className="vector vector_black"></div>
                    </div>
            </div>
          
        </div>
    )
  
}

export default Footer;