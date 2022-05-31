import { Component } from 'react/cjs/react.production.min';
import { Link } from 'react-router-dom';
import logo from '../header/img/logo.svg';
import coffeeimg from '../header/img/header__coffee.svg';
import "./header.scss";
import '../../menu.scss';
import '../../coffee-img.scss';
import burger from '../header/img/burger.svg';
import ScrollableAnchor from 'react-scrollable-anchor/lib/ScrollableAnchor';


class  Header extends Component {

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
        <div className="header">
            <img className='logo'  src={logo} alt="logo" />
            <ul className='menu'>
                <li><Link className='items' to='/'>Coffee house</Link></li>
                <li><Link className='items' to='/ourcoffe'>Our coffee</Link></li>
                
            </ul>
                <h1 className={this.state.show ? 'header__title textclear' : 'header__title'}>Everything You Love About Coffee</h1>
                    <div className="wrapp">
                        <div className="vector"></div>
                        <img src={coffeeimg} alt="coffeeimg" className="coffee" />
                        <div className="vector"></div>
                    </div>
                <h2 className={this.state.show ? 'header__descr textclear' : 'header__descr'}>We makes every day full of energy and taste
                                                    <br />
                                              Want to try our beans?</h2>
            <a href='#about' className="header__btn" >More</a>

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


export default Header;