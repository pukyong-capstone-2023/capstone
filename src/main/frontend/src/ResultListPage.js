import Container from 'react-bootstrap/Container';
import ContentList from "./component/ContentList";
import AddContent from './component/AddContent';
import Footer from './component/Footer';
import ChartComponent from './component/ChartComponent.js';
import data from './data'
import { useState } from 'react';
import { Row } from 'react-bootstrap';

function ResultListPage() {

    const clouds = getClouds();
    const vcpus = getVcpus();
    const memories = getMemories();

    const [selectedClouds, setSelectedClouds] = useState([]);
    const [selectedVcpu, setSelectedVcpu] = useState(0);
    const [selectedMonth, setSelectedMonth] = useState(0);
    const [selectedMemory, setSelectedMemory] = useState(0);

    console.log(selectedClouds, selectedVcpu, selectedMemory)

    const filteredData = data
            .filter(singleData => selectedClouds.includes(singleData.Vender))
            .filter(singleData => selectedVcpu === 0 || singleData.vCPU === selectedVcpu)
            .filter(singleData => selectedMemory === 0 || singleData['Memory(GiB)'] === selectedMemory);
    
    console.log(filteredData)

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
                <ChartComponent />
                <AddContent />
                <Footer />
            </Row>
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