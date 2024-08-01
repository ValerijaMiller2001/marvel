import { useState } from "react";
import {Helmet} from "react-helmet";
import CharInfo from "../char-info/char-info";
import CharList from "../char-list/char-list";
import Asset from "../asset/asset";
import RandomChar from "../random-char/random-char";
import CharSearch from "../char-search/char-search";
import ErrorBoundary from "../error-boundary/error-boundary";

const MainPage = () => {

    const [selectedChar, setChar] = useState(null);

    const onCharSelected = (id) => {
        setChar(id);
    }


    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Marvel information portal"
                />
                <title>Marvel information portal</title>
            </Helmet>
            <ErrorBoundary>
                <RandomChar />
            </ErrorBoundary>
            <div className="wrapper">
                <ErrorBoundary>
                    <CharList onCharSelected={onCharSelected} />
                </ErrorBoundary>
                <div className="right">
                    <ErrorBoundary>
                        <CharInfo charId={selectedChar} />
                        <CharSearch/>
                    </ErrorBoundary>
                    <Asset />
                </div>
            </div>

        </>
    )
}

export default MainPage;