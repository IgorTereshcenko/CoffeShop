import "./ourCoffee.scss";
import { Component } from "react/cjs/react.production.min";
import { Link } from "react-router-dom";
import logo from '../header/img/logo.svg';
import '../../menu.scss';
import burger from '../header/img/burger.svg';



class OurCoffee extends Component {

    state = {
        show: false,
    }
    
    onClick = () => {
        this.setState({ 
            show: !this.state.show
        });
    }

    render() {
        return (
            <div className="ourcoffee">
                <h2 className="ourcoffee__title">Our Coffee</h2>
                <img className='logo logo_our'  src={logo} alt="logo" />
                <ul className='menu menu_our'>
                    <li><Link className='items' to='/'>Coffee house</Link></li>
                    <li><Link className='items' to='/ourcoffe'>Our coffee</Link></li>
                </ul>
    
                <div className="burger">
                    <img  
                    src={burger} 
                    alt="menu" 
                    className= {this.state.show ? 'burger__img rotate' : 'burger__img'}
                    onClick = {this.onClick}/>
                    <div className= {this.state.show ? 'burger__menu show' : 'burger__menu hide'}>
                            <ul className='burger__item'>
                                <li className='burger__li'><Link className='burger__items' to='/'>Coffee house</Link></li>
                                <li className='burger__li'><Link className='burger__items' to='/ourcoffe'>Our coffee</Link></li>
                            </ul>
                    </div>
                </div>
    
            </div>   
        )
    }
  
}

export default OurCoffee;