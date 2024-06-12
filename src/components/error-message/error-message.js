import errorGif from './error.gif';
import './error-message.scss';

const ErrorMessage = () => {
    return (
        <img src={errorGif} alt="error" className='error' />
    )
}

export default ErrorMessage;