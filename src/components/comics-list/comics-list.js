import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import useMarvelService from '../../services/marvel-service';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../error-message/error-message';
import './comics-list.scss';

const setContent = (process, Component, newItemLoading ) => {
    switch (process) {
        case 'waiting':
            return <Spinner/>;
        case 'loading':
            return newItemLoading ? <Component/> : <Spinner/>;
        case 'confirmed':
            return <Component/>;
        case 'error':
            return <ErrorMessage/>
        default: 
            throw new Error('Unexpected process state');
    }
}

const ComicsList = (props) => {
    const [comicList, setComicList] = useState([]);

    const [newItemLoading, setNewItemLoading] = useState(false);
    const [offset, setOffset] = useState(0);
    const [comicEnded, setComicEnded] = useState(false);

    const {getAllComics, process, setProcess} = useMarvelService();

    useEffect(() => {
        onRequest(offset, true);
        // eslint-disable-next-line
    }, [])

    const onRequest = (offset, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true);
        getAllComics(offset)
            .then(onComicListLoaded)
            .then(() => setProcess('confirmed'))
    }

    const onComicListLoaded = (newComicList) => {
        let ended = false;
        if (newComicList.lenght < 8) {
            ended = true
        }

        setComicList(comicList => [...comicList, ...newComicList]);
        setNewItemLoading(false);
        setOffset(offset => offset + 8);
        setComicEnded(ended);
    }

    function renderItems(arr) {
        const items = arr.map((item, i) => {
            return (
                <li className="comicslist_item" key={i}>
                    <Link to={`/comics/${item.id}`}>
                        <img src={item.thumbnail} alt={item.title} className="comicslist_img" />
                        <div className="comicslist_title">{item.title}</div>
                        <div className="comicslist_subtitle">{item.price}</div>
                    </Link>
                </li>
            )
        })

        return (
            <ul className="comicslist_wrapper">
                {items}
            </ul>
        )
    }

    return (
        <div className="comicslist">
            {setContent(process, () => renderItems(comicList), newItemLoading)}

            <button 
                className='btn btn_long' 
                disabled={newItemLoading}
                style={{'display': comicEnded ? 'none' : 'block'}}
                onClick={() => onRequest(offset)}>
                    LOAD MORE
            </button>
        </div>
    )
}

export default ComicsList;