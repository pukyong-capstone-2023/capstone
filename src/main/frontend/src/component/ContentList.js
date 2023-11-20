
function ContentList({ children }) {
    return (
        <div className="col-12">
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

        <div class="card text-bg-info mb-3" style={{maxWidth: "18rem", margin:"20px"}}>
            <div class="card-header"><h3>Cloud 선택</h3></div>
            <div class="card-body">
                {clouds.map((cloud, idx) => (
                <div class="card-text" style={{marginTop: "20px"}} key={idx}>
                    <label style={{display:"flex", alignItems: "center"}}>
                        <input type="checkbox" onChange={() => toggleCloud(cloud)} style={{marginRight: "10px"}} />{cloud}</label>
                </div>
                ))}
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
        <div class="card text-bg-info mb-3" style={{maxWidth: "18rem", margin:"20px"}}>
            <div class="card-header"><h3>기간</h3></div>
            <div class="card-body">
                <div class="card-text" style={{marginTop: "40px"}}>
                    <div class="card-header"><h5>사용기간</h5></div><label>
                    <div style={{display:'flex'}}>
                    <input type="text" class="form-control form-control-sm" value={selectedMonth} nChange={update}/>
                    <button type="button" style={{marginLeft:"10px"}} class="btn btn-light btn-sm">설정</button>
                    </div>
             </label>
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
        <div class="card text-bg-info mb-3" style={{maxWidth: "18rem", margin:"20px"}}>
            <div class="card-header"><h3>CPU 선택</h3></div>
            <div class="card-body">
                <div class="card-text" style={{marginTop: "40px"}}>
                    <select class="form-select form-select-lg mb-3" aria-label="Large select example" onChange={update} value={selectedVcpu}>
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
        <div class="card text-bg-info mb-3" style={{maxWidth: "18rem", margin:"20px"}}>
            <div class="card-header"><h3>MEMORY 선택</h3></div>
            <div class="card-body">
                <div class="card-text" style={{marginTop: "40px"}}>
                <select select class="form-select form-select-lg mb-3" aria-label="Large select example" onChange={update} value={selectedMemory}>
                 {memories.map((memory, idx) => (
                     <option id={idx} value={memory}>{memory}GiB(GB)</option>
                 ))}
             </select>
                </div>
            </div>
        </div>
    );

}