import React from 'react';
import {Route, Routes} from 'react-router-dom';
import IntroducePage from './IntroducePage';
import ResultListPage from './ResultListPage';
import Header from './component/Header';

function App() {

    return (
        <div className='App'>
            <Header/>
            <Routes>
                <Route path='/' element={<IntroducePage /> } />
                <Route path='/ResultListPage' element={<ResultListPage/> } />
            </Routes>
        </div>
    );
}

export default App;
