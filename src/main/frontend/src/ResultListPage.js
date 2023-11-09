import './IntroducePage.css';
import './ResultListPage.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import ContentList from "./component/ContentList";
import Chart from './component/Chart';
import AddContent from './component/AddContent';
import Footer from './component/Footer';


function ResultListPage() {
    return(
        <div>
            <div className="introduce_headerbar">
                <Navbar className="bg-custom">
                    <Container>
                        <h1 style={{ color: '#ffffff', fontSize : '30px', fontWeight :'bold' }}>Team 올린엄지</h1>
                    </Container>
                </Navbar>
            </div>
            <div className='result_contentbar'>
                <ContentList/>
            </div>
            <Chart />
            <AddContent />
            <Footer />
        </div>
        
    );
};


export default ResultListPage;