import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import ContentList from "./component/ContentList";
import Chart from './component/Chart';
import AddContent from './component/AddContent';
import Footer from './component/Footer';
import titleImg from './img/pngegg.png';


function ResultListPage() {
    return (
        <div>
            <div className="introduce_headerbar" style={{ textAlign: 'lte'}}>
                <Navbar>
                    <Container>
                        <Navbar.Brand href="/" style={{ display:'flex' }}>
                             <img src = {titleImg}/>
                             <h1>Team 올린엄지</h1>
                        </Navbar.Brand>
                    </Container>
                </Navbar>
            </div>
            <div className='result_contentbar'>
                <ContentList />
            </div>
            <Chart />
            <AddContent />
            <Footer />
        </div>

    );
};


export default ResultListPage;