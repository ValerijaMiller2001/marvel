import {useState, useEffect, useRef} from 'react'
import PropTypes from 'prop-types';
import useMarvelService from '../../services/marvel-service';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../error-message/error-message';
import './char-list.scss';

const CharList = (props) => {
    const [charList, setCharList] = useState([]);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [offset, setOffset] = useState(210);
    const [charEnded, setCharEnded] = useState(false);
    
    const {loading, error, getAllCharacters} = useMarvelService();

    useEffect(() => {
        onRequest(offset, true);
        // onRequest(offset);
    }, [])

    const onRequest = (offset, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true);
        getAllCharacters(offset)
            .then(onCharListLoaded)
    }

    const onCharListLoaded = (newCharList) => {
        let ended = false;
        if (newCharList.lenght < 9) {
            ended = true
        }

        setCharList(charList => [...charList, ...newCharList]);
        setNewItemLoading(newItemLoading => false);
        setOffset(offset => offset + 9);
        setCharEnded(charEnded => ended);
    } 

    const itemRefs = useRef([]);

    const focusOnItem = (id) => {
        itemRefs.current.forEach(item => item.classList.remove('charlist_item_selected'));
        itemRefs.current[id].classList.add('charlist_item_selected');
        itemRefs.current[id].focus();
    }

    function renderItems(arr) {
        const items = arr.map((item, i) => {
            let imgStyle = {'objectFit' : 'cover'};
            if (item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
                imgStyle = {'objectFit' : 'unset'};
            }

            return (
                <div 
                    className="charlist_item" 
                    tabIndex={0}
                    ref={el => itemRefs.current[i] = el}
                    key={item.id}
                    onClick={() => {
                        props.onCharSelected(item.id);
                        focusOnItem(i);
                    }}
                    onKeyPress={(e) => {
                        if (e.key === ' ' || e.key === "Enter") {
                            props.onCharSelected(item.id);
                            focusOnItem(i);
                        }
                    }}>
                    <img src={item.thumbnail} alt={item.name}className="charlist_img" style={imgStyle} />
                    <div className="charlist_title">{item.name}</div>
                </div>
            )
        })

        return (
            <div className="charlist_wrapper">
                {items}
            </div>
        )
    }

    const items = renderItems(charList);
    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading && !newItemLoading ? <Spinner /> : null;
    return (
        <div className="charlist">
            {errorMessage}
            {spinner}
            {items}
            <button 
                className='btn btn_long'
                disabled={newItemLoading}
                style={{'display': charEnded ? 'none' : 'block'}}
                onClick={() => onRequest(offset)}>
                LOAD MORE
            </button>
        </div>
    )
    
}

CharList.propTypes = {
    onCharSelected: PropTypes.func.isRequired
}

export default CharList;