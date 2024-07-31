import { Link } from 'react-router-dom';
import './single-comic-layout.scss';

const SingleComicLayout = ({data}) => {
    const {title, description, thumbnail, price, pageCount, language} = data;

    return (
        <div className="singlecomic">
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