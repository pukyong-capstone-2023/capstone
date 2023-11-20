
function ContentList({ children }) {
    return (
        <div className="col-12 mb-3">
            <div className="row">
                {children}
            </div>
        </div>
    );
};

export default ContentList;


ContentList.SelectClouds = ({ clouds, selectedClouds, setSelectedClouds }) => {

    const toggleCloud = cloud => {
        if (selectedClouds.includes(cloud)) {
            setSelectedClouds(selectedClouds.filter((selectedCloud) => selectedCloud !== cloud));
        }
        else {
            setSelectedClouds([...selectedClouds, cloud]);
        }
    }

    return (

        <div class="col card text-bg-info m-3">
            <div class="card-body">
                <h3 className="card-title">Cloud 선택</h3>
                <div class="card-text">
                    {clouds.map((cloud, idx) => 
                        <div><input key={idx} type="checkbox" className="me-1" onChange={() => toggleCloud(cloud)} />{cloud}</div>
                    )}
                </div>
            </div>
        </div>
    );

}

ContentList.SelectMonth = ({ selectedMonth, setSelectedMonth }) => {

    const update = (e) => {
        const v = isNaN(Number(e.target.value)) ? 0 : Number(e.target.value);
        setSelectedMonth(v);
    }

    return (
        <div class="col card text-bg-info m-3">
            <div class="card-body">
                <h3 className="card-title">기간</h3>
                <div class="card-text">
                    <input type="text" class="form-control form-control-sm" value={selectedMonth} nChange={update}/>
                </div>
            </div>
        </div>
    );

}

ContentList.SelectCPU = ({ vcpus, selectedVcpu, setSelectedVcpu }) => {

    const update = (e) => {
        const v = Number(e.target.value);
        setSelectedVcpu(v);
    }

    return (
        <div class="col card text-bg-info m-3">
            <div class="card-body">
                <h3 className="card-title">CPU 선택</h3>
                <div class="card-text">
                    <select class="form-select form-select-sm mb-3" aria-label="Large select example" onChange={update} value={selectedVcpu}>
                 {vcpus.map((vcpu, idx) => (
                     <option id={idx} value={vcpu}>{vcpu}</option>
                 ))}
                 </select>
                </div>
            </div>
        </div>
    );

}

ContentList.SelectMemory = ({ memories, selectedMemory, setSelectedMemory }) => {

    const update = (e) => {
        const v = Number(e.target.value);
        setSelectedMemory(v);
    }

    return (
        <div class="col card text-bg-info m-3">
            <div class="card-body">
                <h3 className="card-title">MEMORY 선택</h3>
                <div class="card-text">
                <select select class="form-select form-select-sm mb-3" aria-label="Large select example" onChange={update} value={selectedMemory}>
                 {memories.map((memory, idx) => (
                     <option id={idx} value={memory}>{memory}GiB(GB)</option>
                 ))}
             </select>
                </div>
            </div>
        </div>
    );

}