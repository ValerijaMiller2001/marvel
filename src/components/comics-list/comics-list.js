import './comics-list.scss';
import ultimate from '../../resources/img/ultimate_x_men.png';

const ComicsList = () => {
    return (
        <div className="comicslist">
            <div className="comicslist_wrapper">
                <div className="comicslist_item">
                    <img src={ultimate} alt="ultimate" className="comicslist_img" />
                    <div className="comicslist_title">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
                    <div className="comicslist_subtitle">9.99$</div>
                </div>
                <div className="comicslist_item">
                    <img src={ultimate} alt="ultimate" className="comicslist_img" />
                    <div className="comicslist_title">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
                    <div className="comicslist_subtitle">9.99$</div>
                </div>
                <div className="comicslist_item">
                    <img src={ultimate} alt="ultimate" className="comicslist_img" />
                    <div className="comicslist_title">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
                    <div className="comicslist_subtitle">9.99$</div>
                </div>
                <div className="comicslist_item">
                    <img src={ultimate} alt="ultimate" className="comicslist_img" />
                    <div className="comicslist_title">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
                    <div className="comicslist_subtitle">9.99$</div>
                </div>
                <div className="comicslist_item">
                    <img src={ultimate} alt="ultimate" className="comicslist_img" />
                    <div className="comicslist_title">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
                    <div className="comicslist_subtitle">9.99$</div>
                </div>
                <div className="comicslist_item">
                    <img src={ultimate} alt="ultimate" className="comicslist_img" />
                    <div className="comicslist_title">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
                    <div className="comicslist_subtitle">9.99$</div>
                </div>
                <div className="comicslist_item">
                    <img src={ultimate} alt="ultimate" className="comicslist_img" />
                    <div className="comicslist_title">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
                    <div className="comicslist_subtitle">9.99$</div>
                </div>
            </div>
            <button className='btn btn_long'>LOAD MORE</button>
        </div>
    )
}

export default ComicsList;