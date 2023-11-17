import Container from 'react-bootstrap/Container';
import ContentList from "./component/ContentList";
import AddContent from './component/AddContent';
import Footer from './component/Footer';
import ChartComponent from './component/ChartComponent.js';

function ResultListPage() {

    const clouds = ["AWS", "NCloud", "GCP"]
    const vcpus = [2,4,8,16,32,64]
    const memories = [2,4,7,16,32,64]

    return (
        <Container>
            <ContentList clouds={clouds} vcpus={vcpus} memories={memories} />
            <ChartComponent />
            <AddContent />
            <Footer />
        </Container>
    );

};


export default ResultListPage;