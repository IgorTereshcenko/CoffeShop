import './aboutOur.scss';
import coffeeimg from '../about/img/about-coffee.svg';
import aboutourimg from '../aboutOur/img/AboutOurImg.png';
import '../../coffee-img.scss';

const AboutOur = () => {
    return (
        <div className="aboutour">
            <div className="container">
                <div className="aboutour__wrapper">
                    <div className="aboutour__img">
                        <img src={aboutourimg} alt="girldreankcoffee" />
                    </div>

                    <div className="aboutour__text">
                        <h2 className="aboutour__title">About our beans</h2>

                        <div className="wrapp">
                        <div className="vector vector_black"></div>
                        <img src={coffeeimg} alt="coffeeimg" className="coffee" />
                        <div className="vector vector_black"></div>
                        </div>

                        <div className="aboutour__descr">
                        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                                                    <br /><br />
                        Afraid at highly months do things on at. Situation recommend objection do intention
                        so questions. 
                                                    <br />
                        As greatly removed calling pleased improve an. Last ask him cold feel
                                                    <br />
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face.
                        </div>
                    </div>
                </div>
                    <div className="aboutour__wrapp"></div>
            </div>
        </div>
    )
}

export default AboutOur;