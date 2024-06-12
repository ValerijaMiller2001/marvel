import { Component } from 'react';
import PropTypes from 'prop-types';
import MarvelService from '../../services/marvel-service';
import ErrorMessage from '../error-message/error-message';
import Spinner from '../spinner/spinner';
import Skeleton from '../skeleton/skeleton';
import './char-info.scss';

class CharInfo extends Component {
    state = {
        char: null,
        loading: false,
        error: false
    }

    marvelService = new MarvelService();

    componentDidMount() {
        this.updateChar();
    }

    componentDidUpdate(prevProps) {
        if (this.props.charId !== prevProps.charId) {
            this.updateChar();
        }
    }


    onCharLoaded = (char) => {
        this.setState({
            char, 
            loading: false
        })
    }

    onCharLoading = () => {
        this.setState({
            loading: true
        })
    }

    onError = () => {
        this.setState({
            loading: false,
            error: true
        })
    }

    updateChar = () => {
        const {charId} = this.props;
        if (!charId) {
            return;
        }
        this.onCharLoading();
        this.marvelService
            .getCharacter(charId)
            .then(this.onCharLoaded)
            .catch(this.onError);
    }

    render() {
        const {char, loading, error} = this.state;

        const skeleton = char || loading || error ? null : <Skeleton />;
        const errorMessage = error ? <ErrorMessage /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = !(loading || error || !char) ? <View char={char} /> : null;

        return (
            <div className='charinfo'>
                {skeleton}
                {errorMessage}
                {spinner}
                {content}
            </div>      
        )
    }
   
}

const View = ({char}) => {
    const {name, description, thumbnail, homepage, wiki, comics} = char;
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
                        // eslint-disable-next-line
                        comics.map((item, i) => {
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