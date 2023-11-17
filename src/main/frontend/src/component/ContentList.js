// import './ContentList.css';

function ContentList({clouds, vcpus, memories}) {
    return (
        <div className="col">
            <div className="row">
                <SelectClouds clouds={clouds}/>
                <SelectMonth />
                <SelectCPU vcpus={vcpus}/>
                <SelectMemory memories={memories}/>
            </div>
        </div>
    );
};

export default ContentList;


function SelectCPU({vcpus}) {
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

function SelectMemory({memories}) {
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

function SelectMonth() {
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

function SelectClouds({clouds}) {
    return (
        <div className="col-3">
            <h3>Cloud 선택</h3>
            {clouds.map((cloud, idx) => (
                <label id={idx}>{cloud}<input type="checkbox"/></label>
            ))}
        </div>
    );
}
