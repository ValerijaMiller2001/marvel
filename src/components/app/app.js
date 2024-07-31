import { lazy, Suspense } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AppHeader from "../app-header/app-header";
import Spinner from '../spinner/spinner';
import SingleComicLayout from '../pages/single-comic-layout/single-comic-layout';
import SingleCharacterLayout from '../pages/single-character-layout/single-character-layout';
const Page404 = lazy(() => import('../pages/404'));
const MainPage = lazy(() => import('../pages/main-page'));
const ComicsPage = lazy(() => import('../pages/comics-page'));
const SinglePage = lazy(() => import('../pages/single-page'));

const App = () => {
    return (
        <Router>
            <div className='app'>
                <AppHeader />
                <main>
                    <Suspense fallback={<Spinner/>}>
                        <Routes>
                            <Route path='/' element={<MainPage/>} />
                            <Route path='/comics' element={<ComicsPage/>} />
                            <Route path='*' element={<Page404/>} />
                            <Route path='/characters/:id' element={<SinglePage Component={SingleCharacterLayout} dataType='character'/>}/>
                            <Route path='/comics/:id' element={<SinglePage Component={SingleComicLayout} dataType='comic'/>}/>
                        </Routes>
                    </Suspense>
                </main>  
            </div>
        </Router>
    )
}

export default App;