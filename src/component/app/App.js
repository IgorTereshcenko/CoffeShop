import { Component } from 'react/cjs/react.development';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from '../coffeshop-main-bg/about/about';
import Best from '../coffeshop-main-bg/best/best';
import Header from '../coffeshop-main-bg/header/header'
import best1 from '../coffeshop-main-bg/best/img/best1.png';
import best2 from '../coffeshop-main-bg/best/img/best2.png';
import best3 from '../coffeshop-main-bg/best/img/best3.png';
import img2 from '../coffeshop-main-bg/coffeeInfoWrapper/img/infowrapperimg.jpg'
import Footer from '../coffeshop-main-bg/footer/footer';
import OurCoffee from '../coffeshop-main-bg/ourCoffee/ourCoffee';
import AboutOur from '../coffeshop-main-bg/aboutOur/aboutOur';
import SearchPanel from '../coffeshop-main-bg/searchPanel/searchPanel';
import Filters from '../coffeshop-main-bg/filters/filters';
import CardWrapper from '../coffeshop-main-bg/cardWrapper/cardWrapper';
import CoffeeInfoWrapper from '../coffeshop-main-bg/coffeeInfoWrapper/coffeeInfoWrapper';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bestCoffe: [
                {name: 'Solimo Coffee Beans 2 kg', price: 10.73, img: best1},
                {name: 'Presto Coffee Beans 1 kg', price: 15.99, img: best2},
                {name: 'AROMISTICO Coffee 1 kg', price: 6.99, img: best3}
            ],
            coffeCountry: [
                {name: 'Nesscaffe', price: 8.99, img: best3, img2: img2, country: 'Brazil',id: 0, descr:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
                {name: 'AROMISTICO Coffee 1 kg', price: 6.99, img: best3, img2: img2, country: 'Kenya',id: 1,descr:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
                {name: 'AROMISTICO Coffee 1 kg', price: 6.99, img: best3, img2: img2, country: 'Columbia',id: 2,descr:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
                {name: 'AROMISTICO Coffee 1 kg', price: 6.99, img: best3, img2: img2, country: 'Brazil',id: 3,descr:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
                {name: 'AROMISTICO Coffee 1 kg', price: 6.99, img: best3, img2: img2, country: 'Brazil',id: 4,descr:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
                {name: 'AROMISTICO Coffee 1 kg', price: 6.99, img: best3, img2: img2, country: 'Brazil',id: 5,descr:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
            ],
            term: '',
            filter: '',   
        }
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.country.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    filterPost = (items, filter) => {
        if (filter === 'Brazil') {
            return items.filter(item => item.country === 'Brazil');
        } else if (filter === 'Kenya') {
            return items.filter(item => item.country === 'Kenya');
        } else if (filter === 'Columbia') {
            return items.filter(item => item.country === 'Columbia');
        } else {
            return items;
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }

     
 render() {
    const {bestCoffe,coffeCountry,term,filter} = this.state;
    const visibleDate = this.filterPost(this.searchEmp(coffeCountry, term), filter);
    
    return (
        <Router>
            <>
            <Switch>
                <Route  exact path="/">
                    <Header/>
                    <About/> 
                    <Best bestCoffe = {bestCoffe}/>
                    <Footer/>
                </Route>
                
                <Route exact path="/ourcoffe">
                        <OurCoffee/>
                        <AboutOur/>
                        <SearchPanel onUpdateSearch = {this.onUpdateSearch}/>
                        <Filters filterSelect = {this.onFilterSelect} filter={filter}/>
                        <CardWrapper date = {visibleDate}/>
                        <Footer/>
                </Route>
                
                <Route exact path='/ourcoffe/:ourcoffeId'>
                        <OurCoffee/>
                        <CoffeeInfoWrapper date = {coffeCountry}/> 
                        <Footer/>
                </Route>
            </Switch>
            </>
        </Router>
    )
}
}

export default App;