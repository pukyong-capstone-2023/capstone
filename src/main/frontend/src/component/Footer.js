import './Footer.css';
import '../IntroducePage.css';

function Footer() {

    return (
        <footer>
            <div className="coment">
                <div className="cloud_introduce">
                    <div className="introduce_aws">
                        <div className="introduce_p"><p>아마존</p></div>
                    </div>
                    <div className="introduce_naver">
                        <div className="introduce_p"><p>네이버</p></div>
                    </div>
                    <div className="introduce_gcp">
                        <div className="introduce_p"><p>구글</p></div>
                    </div>
                    <div className="introduce_micro">
                        <div className="introduce_p"><p>마이크로</p></div>
                    </div>
                    <div className="introduce_samsung">
                        <div className="introduce_p"><p>삼성</p></div>
                    </div>
                </div>
                <hr />
                <div className="add_coment">
                    <div className="creater">
                        <h5>Creaters</h5>
                        <p style={{ color : '#7a7a7a', paddingLeft: '20px', marginTop: '4px'}}>이건창, 서정운, 이나겸, 쑤와디</p>
                    </div>
                    <div className="github">
                        <h5>Github Link</h5>
                        <p style={{ color : '#7a7a7a', paddingLeft: '20px', marginTop: '4px' }}>http://...</p>
                    </div>
                    <div className="develops">
                        <h5>Develops</h5>
                        <p style={{ color : '#7a7a7a', paddingLeft: '20px', marginTop: '4px' }}>chart.js 사용..</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;