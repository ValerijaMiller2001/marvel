import './asset.scss';
import asset from '../../resources/img/asset.png';

const Asset = () => {
    return (
        <div className="asset">
            <img src={asset} alt="asset" />
        </div>
    )
}

export default Asset;