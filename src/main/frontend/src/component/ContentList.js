
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


ContentList.SelectClouds = ({clouds, toggleCloud}) => {

    return (
        <div className="col-3">
            <h3>Cloud 선택</h3>
            {clouds.map((cloud, idx) => (
                <label id={idx}><input type="checkbox" onChange={() => toggleCloud(cloud)}/>{cloud}</label>
            ))}
        </div>
    );
}

ContentList.SelectMonth = () => {
    return (
        <div className="col-3">
            <h3>기간</h3>
            <label>
                사용기간
                <div>
                    <input id="period" type="text" value={0}/>
                    <button id="period-btn">설정</button>
                </div>
            </label>
            <p>** 기준은 달 입니다! **</p>
        </div>
    );
}

ContentList.SelectCPU = ({vcpus}) => {
    return (
        <div className="col-3">
            <h3>CPU 선택</h3>
            <select>
                    {vcpus.map((vcpu, idx) => (
                        <option id={idx}>{vcpu}</option>
                    ))}
            </select>
        </div>
    );
}

ContentList.SelectMemory = ({memories}) => {
    return (
        <div className="col-3">
            <h3>MEMORY 선택</h3>
            <select>
                {memories.map((memoryType, idx) => (
                    <option id={idx}>{memoryType}GiB(GB)</option>
                ))}
            </select>
        </div>
    );
}