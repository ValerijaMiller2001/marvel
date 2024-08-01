import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";

import './single-character-layout.scss';

const SingleCharacterLayout = ({data}) => {
    const {name, descriptionAll, thumbnail} = data;

    return (
        <div className="singlechar">
            <Helmet>
                <meta
                    name="description"
                    content={`${name} character`}
                />
                <title>{name}</title>
            </Helmet>
            <div className="singlechar_wrapper">
                <img src={thumbnail} alt={name} className="singlechar_img" />
                <div>
                    <div className="singlechar_block">
                        <div className="singlechar_title">{name}</div>
                        <Link to='/' className="singlechar_link">Back to all</Link>
                    </div>

                    <div className="singlechar_descr">{descriptionAll}</div>
                </div>
            </div>
        </div>

    )
}



export default SingleCharacterLayout;