import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Route, Routes} from 'react-router-dom';
import IntroducePage from './IntroducePage';
import ResultListPage from './ResultListPage';

function App() {
    const [hello, setHello] = useState('')

    useEffect(() => {
        axios.get('/api/hello')
            .then(response => setHello(response.data))
            .catch(error => console.log(error))
    }, []);

    return (
        <div className='App'>
            <div>
                백엔드에서 가져온 데이터입니다 : {hello}
            </div>
            <Routes>
                <Route path='/' element={<IntroducePage /> } />
                <Route path='/ResultListPage' element={<ResultListPage/> } />
            </Routes>
        </div>
    );
}

export default App;
