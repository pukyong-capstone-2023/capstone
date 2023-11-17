import Container from 'react-bootstrap/Container';
import ContentList from "./component/ContentList";
import AddContent from './component/AddContent';
import Footer from './component/Footer';
import ChartComponent from './component/ChartComponent.js';
import data from './data'

function ResultListPage() {

    const clouds = getClouds();
    const vcpus = getVcpus();
    const memories = getMemories();

    return (
        <Container>
            <ContentList clouds={clouds} vcpus={vcpus} memories={memories} />
            <ChartComponent />
            <AddContent />
            <Footer />
        </Container>
    );


    function getMemories() {
        return data
                .map(a => a['Memory(GiB)'])
                .filter((cloud, idx, arr) => arr.indexOf(cloud) === idx)
                .sort((a, b) => a - b);
    }

    function getVcpus() {
        return data.map(instance => instance.vCPU)
                .filter((cloud, idx, arr) => arr.indexOf(cloud) === idx)
                .sort((a, b) => a - b);
    }

    function getClouds() {
        return data.map(instance => instance.Vender)
                .filter((cloud, idx, arr) => arr.indexOf(cloud) === idx);
    }
};


export default ResultListPage;