import { useState } from "react";
import CharInfo from "../char-info/char-info";
import CharList from "../char-list/char-list";
import Asset from "../asset/asset";
import RandomChar from "../random-char/random-char";
import ErrorBoundary from "../error-boundary/error-boundary";

const MainPage = () => {

    const [selectedChar, setChar] = useState(null);

    const onCharSelected = (id) => {
        setChar(id);
    }


    return (
        <>
            <ErrorBoundary>
                <RandomChar />
            </ErrorBoundary>
            <div className="wrapper">
                <ErrorBoundary>
                    <CharList onCharSelected={onCharSelected} />
                </ErrorBoundary>
                <ErrorBoundary>
                    <CharInfo charId={selectedChar} />
                </ErrorBoundary>
            </div>
            <Asset />
        </>
    )
}

export default MainPage;