import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";

import './single-comic-layout.scss';

const SingleComicLayout = ({data}) => {
    const {title, description, thumbnail, price, pageCount, language} = data;

    return (
        <div className="singlecomic">
            <Helmet>
                <meta
                    name="description"
                    content={`${title} comics book`}
                />
                <title>{title}</title>
            </Helmet>
            <div className="singlecomic_wrapper">
                <img src={thumbnail} alt={title} className="singlecomic_img" />
                <div>
                    <div className="singlecomic_block">
                        <div className="singlecomic_title">{title}</div>
                        <Link to='/comics' className="singlecomic_link">Back to all</Link>
                    </div>
                    <div className="singlecomic_descr">{description}</div>
                    <div className="singlecomic_descr">{pageCount}</div>
                    <div className="singlecomic_descr">Language: {language}</div>
                    <div className="singlecomic_price">{price}</div>
                </div>
            </div>
        </div>

    )
}


export default SingleComicLayout;