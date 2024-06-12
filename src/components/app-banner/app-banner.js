import './app-banner.scss';
import avengers from '../../resources/img/avengers.png';
import avengersLogo from '../../resources/img/avengers_logo.png';

const AppBanner = () => {
    return (
        <div className="banner">
            <div className="banner_wrapper">
                <img src={avengers} alt="avengers" className="banner_img" />
                <div className="banner_title">
                    New comics every week!
                    <br />
                    Stay tuned!
                </div>
                <img src={avengersLogo} alt="avengers logo" className="banner_img" />
            </div>
        </div>
    )
}

export default AppBanner;