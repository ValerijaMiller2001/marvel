import { useParams, Link } from 'react-router-dom';
import useMarvelService from '../../services/marvel-service';
import { useState, useEffect } from 'react';
import ErrorMessage from '../error-message/error-message';
import Spinner from '../spinner/spinner';
import './single-comic-page.scss';

const SingleComicPage = () => {
    const {comicId} = useParams();

    const [comic, setComic] = useState(null);
    const {loading, error, getComic, clearError} = useMarvelService();

    useEffect(() => {
        updateComic();
    }, [comicId])

    const onComicLoaded = (comic) => {
        setComic(comic);
    }

    const updateComic = () => {
        clearError();
        getComic(comicId)
            .then(onComicLoaded)
    }

    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error || !comic) ? <View comic={comic} /> : null;

    return (
        <div className="singlecomic">
            {errorMessage}
            {spinner}
            {content}
        </div>
    )
}

const View = ({comic}) => {
    const {title, description, thumbnail, price, pageCount, language} = comic;

    return (
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
    )
}

export default SingleComicPage;