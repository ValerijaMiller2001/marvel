import {useState, useEffect} from 'react'
import Spinner from '../spinner/spinner';
import useMarvelService from '../../services/marvel-service';
import ErrorMessage from '../error-message/error-message';

import './random-char.scss';
import decoration from '../../resources/img/decoration.png';

const RandomChar = () => {
    const [char, setChar] = useState({});

    const {loading, error, getCharacter, clearError} = useMarvelService();

    useEffect(() => {
        updateChar();
        // const timerId = setInterval(updateChar, 10000);
        // return () => {
        //     clearInterval(timerId)
        // } 
    }, [])

    const onCharLoaded = (char) => {
        setChar(char);
    }

    const updateChar = () => {
        clearError();
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
        getCharacter(id)
            .then(onCharLoaded)
    }

    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error) ? <View char={char} /> : null;

    return (
        <div className="randomchar">
            <div className="randomchar_wrapper">
                {errorMessage}
                {spinner}
                {content}

                <div className="randomchar_black">
                    <div className="randomchar_black_title">
                        Random character for today!
                        <br />
                        Do you want to get to know him better?
                    </div>
                    <div className="randomchar_black_title">Or choose another one</div>
                    <button className='btn btn_red randomchar_black_btn' onClick={updateChar}>TRY IT</button>
                    <img src={decoration} alt="decoration" className='randomchar_black_img' />
                </div>
            </div>
        </div>
    )
}

const View = ({char}) => {
    const {name, description, thumbnail, homepage, wiki} = char;
    let imgStyle = {'objectFit' : 'cover'};
    if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
        imgStyle = {'objectFit' : 'contain'};
    }
    return (
        <div className="randomchar_white">
            <img src={thumbnail} alt={name} className="randomchar_white_img" style={imgStyle} />
            <div className="randomchar_white_block">
                <div className="randomchar_white_title">{name}</div>
                <div className="randomchar_white_descr">{description}</div>
                <div className="randomchar_white_btns">
                    <a href={homepage} className="btn btn_red">HOMEPAGE</a>
                    <a href={wiki} className="btn btn_grey">WIKI</a>
                </div>
            </div>
        </div>
    )
}

export default RandomChar;