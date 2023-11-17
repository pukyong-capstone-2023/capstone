import Container from 'react-bootstrap/Container';
import ContentList from "./component/ContentList";
import Chart from './component/Chart';
import AddContent from './component/AddContent';
import Footer from './component/Footer';
import jsonData from "./data.js";
import setState from 'react'

function ResultListPage() {

    const clouds = ["AWS", "NCloud", "GCP"]
    const vcpus = [2,4,8,16,32,64]
    const memories = [2,4,7,16,32,64]

    return (
        <Container>
            <ContentList clouds={clouds} vcpus={vcpus} memories={memories} />
            <Chart />
            <AddContent />
            <Footer />
        </Container>
    );

};


export default ResultListPage;