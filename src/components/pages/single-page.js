import { useParams } from 'react-router-dom';
import useMarvelService from '../../services/marvel-service';
import { useState, useEffect } from 'react';
import setContent from '../../utils/set-content';
import AppBanner from '../app-banner/app-banner';

const SinglePage = ({Component, dataType}) => {
    const {id} = useParams();

    const [data, setData] = useState(null);
    const { getComic, getCharacter, clearError, process, setProcess} = useMarvelService();

    useEffect(() => {
        updateData();
        // eslint-disable-next-line
    }, [id])

    const onDataLoaded = (data) => {
        setData(data);
    }

    const updateData = () => {
        clearError();
        switch (dataType) {
            case 'comic':
                getComic(id)
                    .then(onDataLoaded)
                    .then(() => setProcess('confirmed'))
                    break;
            case 'character':
                getCharacter(id)
                    .then(onDataLoaded)
                    .then(() => setProcess('confirmed'))
                    break;
            default:
                throw new Error('Unexpected process state')
        }
    }

    return (
        <>
            <AppBanner/>
            {setContent(process, Component, data)}
        </>
    )
}


export default SinglePage;