import './ContentList.css';

function ContentList() {
    return(
        <div className="content-header" style={{display: 'flex', marginBottom: '50px', backgroundColor: '#EBE9EC'}}>
            <div className="selections" style={{paddingLeft: '50px', paddingRight: '50px'}}>
                <div style={{backgroundColor: '#ffffff', borderRadius: '20px 20px 20px 20px', padding: '5px', marginTop: '20px'}}>
                    <h3 style={{color : '#8A2AEF', paddingBottom: '20px', fontSize: '40px'}}>Cloud 선택</h3>
                </div>
                <div style={{backgroundColor: '#ffffff', borderRadius: '20px 20px 20px 20px', padding: '10px', marginTop: '20px', marginBottom: '20px', display: 'grid'}}>
                    <label className="selection">AWS
                        <input type="checkbox" name="cloud" value="AWS" checked="true"/>
                    </label>
                    <label className="selection">NCloud
                        <input type="checkbox" name="cloud" value="Naver Clould" checked="true"/>
                    </label>
                    <label className="selection">GCP
                        <input type="checkbox" name="cloud" value="GCP" checked="true"/>
                    </label>
                    <label className="selection">CLOUD_A
                        <input type="checkbox" name="cloud" value="GCP" checked="true"/>
                    </label>
                    <label className="selection">CLOUD_B
                        <input type="checkbox" name="cloud" checked="true"/>
                    </label>
                    <label className="selection">CLOUD_C
                        <input type="checkbox" name="cloud" checked="true"/>
                    </label>
                </div>
            </div>
            <div className="options_total" style={{display: 'flex'}}>
                <div className="options1" style={{paddingRight: '40px', width: '240px'}}>
                    <div className="title" style={{backgroundColor: '#ffffff', borderRadius: '20px 20px 20px 20px', marginTop: '20px', display : 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <h3 style={{color : '#8A2AEF', paddingBottom: '20px', fontSize: '40px'}}>기간</h3>
                    </div>
                    <div className="selections_option">
                        <label style={{ color: '#8A2AEF', alignItems: 'center', justifyContent: 'center' }}>
                            사용기간
                            <div style={{paddingTop:'20px', paddingBottom:'20px'}}>
                                <input id="period" type="text" value={0} style={{ paddingRight:'20px',width: '90px', border: '2px #8A2AEF solid', borderRadius: '10px 10px 10px 10px' }} />
                                <button id="period-btn" style={{ width : '70px', color : '#ffffff', backgroundColor: '#8A2AEF', border: '2px  solid', borderRadius: '10px 10px 10px 10px' }}>설정</button>
                            </div>
                        </label>
                        <p style={{ color: '#8A2AEF' }}>** 기준은 달 입니다! **</p>
                    </div>
                </div>
                <div className="content_options">
                    <div className="selections_content">
                        <h3 className="selections_h3">CPU 선택</h3>
                    </div>
                    <div className="selections_option">
                        <label id="vcpu" style={{ borderRadius: '10px 10px 10px 10px', paddingBottom: '20px', display: 'grid' }}>
                            <label className="selection">default
                                <input type="checkbox" value="-1" checked="true" />
                            </label>
                            <label className="selection">2 count
                                <input type="checkbox" value="2" checked="true" />
                            </label>
                            <label className="selection">4 count
                                <input type="checkbox" value="4" checked="true" />
                            </label>
                            <label className="selection">8 count
                                <input type="checkbox" value="8" checked="true" />
                            </label>
                            <label className="selection">16 count
                                <input type="checkbox" value="16" checked="true" />
                            </label>
                            <label className="selection">32 count
                                <input type="checkbox" value="32" checked="true" />
                            </label>
                            <label className="selection">64 count
                                <input type="checkbox" value="64" checked="true" />
                            </label>
                        </label>
                    </div>
                </div>
                <div className="content_options">
                    <div className="selections_content">
                        <h3 className="selections_h3">MEMORY 선택</h3>
                    </div>
                    <div className="selections_option">
                        <label id="memory" style={{ borderRadius: '10px 10px 10px 10px', paddingBottom: '20px', display: 'grid' }}>
                            <label className="selection">default
                                <input type="checkbox" value="-1" checked="true" />
                            </label>
                            <label className="selection">2 GiB(or GB)
                                <input type="checkbox" value="2" checked="true" />
                            </label>
                            <label className="selection">4 GiB(or GB)
                                <input type="checkbox" value="4" checked="true" />
                            </label>
                            <label className="selection">8 GiB(or GB)
                                <input type="checkbox" value="8" checked="true" />
                            </label>
                            <label className="selection">16 GiB(or GB)
                                <input type="checkbox" value="16" checked="true" />
                            </label>
                            <label className="selection">32 GiB(or GB)
                                <input type="checkbox" value="32" checked="true" />
                            </label>
                            <label className="selection">64 GiB(or GB)
                                <input type="checkbox" value="64" checked="true" />
                            </label>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentList;