import Container from 'react-bootstrap/Container';
import ContentList from "./component/ContentList";
import Chart from './component/Chart';
import AddContent from './component/AddContent';
import Footer from './component/Footer';


function ResultListPage() {
    return (
        <Container>
            <ContentList />
            <Chart />
            <AddContent />
            <Footer />
        </Container>
    );
};


export default ResultListPage;