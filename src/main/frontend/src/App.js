import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from 'react-router-dom';
import IntroducePage from './IntroducePage';
import ResultListPage from './ResultListPage';
import Header from './component/Header';
import Footer from './component/Footer';

function App() {

    return (
        <div className='App'>
            <Header/>
            <Routes>
                <Route path='/' element={<IntroducePage /> } />
                <Route path='/ResultListPage' element={<ResultListPage/> } />
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
