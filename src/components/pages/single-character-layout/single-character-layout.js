import { Link } from 'react-router-dom';
import './single-character-layout.scss';

const SingleCharacterLayout = ({data}) => {
    const {name, description, thumbnail} = data;

    return (
        <div className="singlechar">
            <div className="singlechar_wrapper">
                <img src={thumbnail} alt={name} className="singlechar_img" />
                <div>
                    <div className="singlechar_block">
                        <div className="singlechar_title">{name}</div>
                        <Link to='/' className="singlechar_link">Back to all</Link>
                    </div>

                    <div className="singlechar_descr">{description}</div>
                </div>
            </div>
        </div>

    )
}



export default SingleCharacterLayout;