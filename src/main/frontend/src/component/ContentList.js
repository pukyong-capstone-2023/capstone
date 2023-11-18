
function ContentList({children}) {
    return (
        <div className="col">
            <div className="row">
                {children}
            </div>
        </div>
    );
};

export default ContentList;


ContentList.SelectClouds = ({clouds, selectedClouds, setSelectedClouds}) => {

    const toggleCloud = cloud => {
        if(selectedClouds.includes(cloud)) {
            setSelectedClouds(selectedClouds.filter((selectedCloud) => selectedCloud !== cloud));
        }
        else {
            setSelectedClouds([...selectedClouds, cloud]);
        }
    }

    return (
        <div className="col-3">
            <h3>Cloud 선택</h3>
            {clouds.map((cloud, idx) => (
                <label id={idx}><input type="checkbox" onChange={() => toggleCloud(cloud)}/>{cloud}</label>
            ))}
        </div>
    );

}

ContentList.SelectMonth = ({selectedMonth, setSelectedMonth}) => {

    const update = (e) => {
        let v = Number(e.target.value);
        if(isNaN(v)) v = 0;
        setSelectedMonth(v);
    }

    return (
        <div className="col-3">
            <h3>기간</h3>
            <label>
                사용기간
                <div>
                    <input type="text" value={selectedMonth} onChange={update} />
                    <button>설정</button>
                </div>
            </label>
            <p>** 기준은 달 입니다! **</p>
        </div>
    );

}

ContentList.SelectCPU = ({vcpus, selectedVcpu, setSelectedVcpu}) => {

    const update = (e) => {
        setSelectedVcpu(e.target.value);
    }

    return (
        <div className="col-3">
            <h3>CPU 선택</h3>
            <select onChange={update} value={selectedVcpu}>
                    {vcpus.map((vcpu, idx) => (
                        <option id={idx} value={vcpu}>{vcpu}</option>
                    ))}
            </select>
        </div>
    );

}

ContentList.SelectMemory = ({memories, selectedMemory, setSelectedMemory}) => {

    const update = (e) => {
        setSelectedMemory(e.target.value);
    }

    return (
        <div className="col-3">
            <h3>MEMORY 선택</h3>
            <select onChange={update} value={selectedMemory}>
                {memories.map((memory, idx) => (
                    <option id={idx} value={memory}>{memory}GiB(GB)</option>
                ))}
            </select>
        </div>
    );

}