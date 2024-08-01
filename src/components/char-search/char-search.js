import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage as FormikErrorMessage} from 'formik';
import * as yup from 'yup';
import {Link} from 'react-router-dom';
import useMarvelService from '../../services/marvel-service';
import ErrorMessage from '../error-message/error-message';

import './char-search.scss';

const CharSearch = () => {
    const [char, setChar] = useState(null);
    const {clearError, getCharacterByName, process, setProcess} = useMarvelService();

    const onCharLoaded = (char) => {
        setChar(char);
    }

    const updateChar = (name) => {
        clearError();
        getCharacterByName(name)
            .then(onCharLoaded)
            .then(() => setProcess('confirmed'))
    }

    const errorMessage = process === 'error' ? <ErrorMessage /> : null;
    const results = !char ? null : char.length > 0 ? 
                                                <div className="search_wrapper">
                                                    <div className="search_title search_title_green">There is! Visit {char[0].name} page?</div>
                                                    <Link to={`/${char[0].id}`}>
                                                        <button type='submit' className="btn btn_grey">TO PAGE</button>
                                                    </Link>
                                                </div> :
                                                <div className="search_wrapper">
                                                    <div className="search_title search_title_red">The character was not found. Check the name and try again</div>
                                                </div>    
    return (
        <div className="search">
            <Formik
                initialValues={{
                    charName: ''
                }}
                validationSchema={yup.object({
                    charName: yup.string().required('This field is required')
                })}
                onSubmit={({charName}) => {
                    updateChar(charName);
                }}
            >
                <Form>
                    <label className="search_title" htmlFor='charName'>Or find a character by name:</label>
                    <div className="search_wrapper">
                        <Field 
                            id='charName'
                            name='charName'
                            type='text'
                            placeholder='Enter name'
                            className='search_input'/>
                                <button 
                                    type='submit' 
                                    className="btn btn_red"
                                    disabled={process === 'loading'}>
                                        FIND
                                </button>
                    </div>
                    <FormikErrorMessage component='div' className='search_error' name='charName'/>
                </Form>
            </Formik>
            {results}
            {errorMessage}
        </div>
    )
}

export default CharSearch;