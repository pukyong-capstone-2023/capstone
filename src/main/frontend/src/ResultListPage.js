import Container from 'react-bootstrap/Container';
import ContentList from "./component/ContentList";
import AddContent from './component/AddContent';
import Footer from './component/Footer';
import ChartComponent from './component/ChartComponent.js';
import data from './data'
import { useState } from 'react';
import { Row } from 'react-bootstrap';

function ResultListPage() {

    const [selectedClouds, setSelectedClouds] = useState([]);
    const [selectedVcpu, setSelectedVcpu] = useState(0);
    const [selectedMonth, setSelectedMonth] = useState(0);
    const [selectedMemory, setSelectedMemory] = useState(0);

    const cloudFilteredData = data.filter(singleData => selectedClouds.includes(singleData.Vender))
    const filteredData = cloudFilteredData
            .filter(singleData => selectedVcpu === 0 || singleData.vCPU === selectedVcpu)
            .filter(singleData => selectedMemory === 0 || singleData['Memory(GiB)'] === selectedMemory);
    
    const clouds = getClouds(data);
    const vcpus = getVcpus(cloudFilteredData);
    const memories = getMemories(cloudFilteredData);

    return (
        <Container>
            <Row>
                <ContentList>
                    <ContentList.SelectClouds 
                        clouds={clouds}
                        selectedClouds={selectedClouds}
                        setSelectedClouds={setSelectedClouds}
                    />
                    <ContentList.SelectMonth
                        selectedMonth={selectedMonth}
                        setSelectedMonth={setSelectedMonth}
                    />
                    <ContentList.SelectCPU
                        vcpus={vcpus}
                        selectedVcpu={selectedVcpu}
                        setSelectedVcpu={setSelectedVcpu}
                    />
                    <ContentList.SelectMemory
                        memories={memories}
                        selectedMemory={selectedMemory}
                        setSelectedMemory={setSelectedMemory}
                    />
                </ContentList>
                <ChartComponent data={filteredData} />
                <AddContent />
                <Footer />
            </Row>
        </Container>
    );


    function getMemories(data) {
        const memories = data.map(instance => instance['Memory(GiB)'])
                .filter((cloud, idx, arr) => arr.indexOf(cloud) === idx);
        memories.push(0);
        memories.sort((a,b) => a - b);
        return memories;
    }

    function getVcpus(data) {
        const vcpus =  data.map(instance => instance.vCPU)
                .filter((cloud, idx, arr) => arr.indexOf(cloud) === idx)
        vcpus.push(0);
        vcpus.sort((a,b) => a - b);
        return vcpus;
    }

    function getClouds(data) {
        return data.map(instance => instance.Vender)
                .filter((cloud, idx, arr) => arr.indexOf(cloud) === idx);
    }
};


export default ResultListPage;