import { Component } from "react";
import AppHeader from "../app-header/app-header";
import CharInfo from "../char-info/char-info";
import CharList from "../char-list/char-list";
import Asset from "../asset/asset";
import RandomChar from "../random-char/random-char";
import ErrorBoundary from "../error-boundary/error-boundary";

class App extends Component {
    state = {
        selectedChar: null
    }

    onCharSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    }

    render() {
        return (
            <div className='app'>
                <AppHeader />
                <main>
                    <ErrorBoundary>
                        <RandomChar />
                    </ErrorBoundary>
                    <div className="wrapper">
                        <ErrorBoundary>
                            <CharList onCharSelected={this.onCharSelected} />
                        </ErrorBoundary>
                        <ErrorBoundary>
                            <CharInfo charId={this.state.selectedChar} />
                        </ErrorBoundary>
                    </div>
                    <Asset />
                </main>  
            </div>
        )
    }
}

export default App;