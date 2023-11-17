import Container from 'react-bootstrap/Container';
import ContentList from "./component/ContentList";
import AddContent from './component/AddContent';
import Footer from './component/Footer';
import ChartComponent from './component/ChartComponent.js';
import data from './data'
import { useState } from 'react';

function ResultListPage() {

    const clouds = getClouds();
    const vcpus = getVcpus();
    const memories = getMemories();

    const [selectedClouds, setSelectedClouds] = useState([]);

    const toggleCloud = cloud => {
        if(selectedClouds.includes(cloud)) {
            setSelectedClouds(selectedClouds.filter((selectedCloud) => selectedCloud !== cloud));
        }
        else {
            setSelectedClouds([...selectedClouds, cloud]);
        }
    }

    return (
        <Container>
            <ContentList>
                <ContentList.SelectClouds clouds={clouds} toggleCloud={toggleCloud} />
                <ContentList.SelectMonth />
                <ContentList.SelectCPU vcpus={vcpus} />
                <ContentList.SelectMemory memories={memories} />
            </ContentList>
            <ChartComponent />
            <AddContent />
            <Footer />
        </Container>
    );


    function getMemories() {
        const memories = data.map(instance => instance['Memory(GiB)'])
                .filter((cloud, idx, arr) => arr.indexOf(cloud) === idx);
        memories.push(0);
        memories.sort((a,b) => a - b);
        return memories;
    }

    function getVcpus() {
        const vcpus =  data.map(instance => instance.vCPU)
                .filter((cloud, idx, arr) => arr.indexOf(cloud) === idx)
        vcpus.push(0);
        vcpus.sort((a,b) => a - b);
        return vcpus;
    }

    function getClouds() {
        return data.map(instance => instance.Vender)
                .filter((cloud, idx, arr) => arr.indexOf(cloud) === idx);
    }
};


export default ResultListPage;