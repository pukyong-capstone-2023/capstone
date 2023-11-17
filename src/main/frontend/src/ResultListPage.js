import Container from 'react-bootstrap/Container';
import ContentList from "./component/ContentList";
import Chart from './component/Chart';
import AddContent from './component/AddContent';
import Footer from './component/Footer';
import jsonData from "./data.js";
import setState from 'react'

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