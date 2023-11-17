// import './ContentList.css';

function ContentList() {
    return (
        <div className="col">
            <div className="row">
                <SelectClouds clouds={["AWS", "NCloud", "GCP"]} />
                <SelectMonth />
                <SelectCPU vcpus={[2,4,8,16,32,64]} />
                <SelectMemory memoryTypes={[2,4,7,16,32,64]}/>
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

function SelectMemory({memoryTypes}) {
    return (
        <div className="col-3">
            <h3>MEMORY 선택</h3>
            <select>
                {memoryTypes.map((memoryType, idx) => (
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
