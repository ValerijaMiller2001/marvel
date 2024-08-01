import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useMarvelService from '../../services/marvel-service';
import setContent from '../../utils/set-content';
import './char-info.scss';

const CharInfo = (props) => {
    const [char, setChar] = useState(null);

    const {getCharacter, clearError, process, setProcess} = useMarvelService();

    useEffect(() => {
        updateChar();
        // eslint-disable-next-line
    }, [props.charId])

    const onCharLoaded = (char) => {
        setChar(char);
    }

    const updateChar = () => {
        const {charId} = props;
        if (!charId) {
            return;
        }
        clearError();
        getCharacter(charId)
            .then(onCharLoaded)
            .then(() => setProcess('confirmed'))
    }

    return (
        <div className='charinfo'>
            {setContent(process, View, char)}
        </div>      
    )
   
}

const View = ({data}) => {
    const {name, description, thumbnail, homepage, wiki, comics} = data;
    let imgStyle = {'objectFit' : 'cover'};
    if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
        imgStyle = {'objectFit' : 'contain'};
    }
    return (
        <div>
            <div className="charinfo_header">
                <img src={thumbnail} alt={name} className='charinfo_img' style={imgStyle} />
                <div className="charinfo_header_block">
                    <div className="charinfo_name">{name}</div>
                    <a href={homepage} className="btn btn_red charinfo_btn_red">HOMEPAGE</a>
                    <a href={wiki} className="btn btn_grey charinfo_btn_grey">WIKI</a>
                </div>
            </div>
            <div className="charinfo_descr">{description}</div>
            <div className="charinfo_comics">
                <div className="charinfo_comics_title">Comics:</div>
                <ul className="charinfo_comics_list">
                    {comics.lenght > 0 ? null : 'There is no comics with this character'}
                    {
                        comics.map((item, i) => {
                            // eslint-disable-next-line
                            if (i > 9) return;
                            return (
                                <li key={i} className="charinfo_comics_item">{item.name}</li> 
                            )
                        })
                    }
   
                </ul>
            </div>
        </div>
        
    )
}

CharInfo.propTypes = {
    charId: PropTypes.number
}

export default CharInfo;