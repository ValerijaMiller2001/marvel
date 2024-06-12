import './single-comic.scss';
import ultimate from '../../resources/img/ultimate_x_men.png';

const SingleComic = () => {
    return (
        <div className="singlecomic">
            <div className="singlecomic_wrapper">
                <img src={ultimate} alt="ultimate" className="singlecomic_img" />
                <div>
                    <div className="singlecomic_block">
                        <div className="singlecomic_title">X-Men: Days of Future Past</div>
                        <a href="#" className="singlecomic_link">Back to all</a>
                    </div>
                    <div className="singlecomic_descr">Re-live the legendary first journey into the dystopian future of 2013 - where Sentinels stalk the Earth, and the X-Men are humanity's only hope...until they die! Also featuring the first appearance of Alpha Flight, the return of the Wendigo, the history of the X-Men from Cyclops himself...and a demon for Christmas!?</div>
                    <div className="singlecomic_descr">144 pages</div>
                    <div className="singlecomic_descr">Language: en-us</div>
                    <div className="singlecomic_price">9.99$</div>
            
                </div>
            </div>
        </div>
    )
}

export default SingleComic;