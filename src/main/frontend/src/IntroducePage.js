import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';
import titleImg from './img/pngegg.png';


function Introduce() {
    const navigate = useNavigate();
    const navigateToResultListPage = () => {
        navigate('/ResultListPage');
    }

    return (
        <div>
            <div className="introduce_slidercontentbar">
                <Carousel>
                    <Carousel.Item>
                        <div className='slidercontents_aws'>
                            <div className='wrapText'>
                                <a className="slidecontents_a" href="https://docs.aws.amazon.com/ko_kr/pricing-calculator/latest/userguide/getting-started.html">아마존 클라우드 보러가기</a>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='slidercontents_ncloud'>
                            <div className='wrapText'>
                                <a className="slidecontents_a" href="https://www.ncloud.com/charge/calc/ko">네이버 클라우드 보러가기</a>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='slidercontents_gcpcloud'>
                            <div className='wrapText'>
                                <a className="slidecontents_a" href="https://cloud.google.com/products/calculator?hl=ko">구글 클라우드 보러가기</a>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='slidercontents_micro'>
                            <div className='wrapText'>
                                <a className="slidecontents_a" href="https://azure.microsoft.com/ko-kr/pricing/">마이크로소프트 클라우드 보러가기</a>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='slidercontents_samsung'>
                            <div className='wrapText'>
                                <a className="slidecontents_a" href="https://www.digitalmarket.kr/web/service/detail.do?s=IAS-4-02-10233">삼성 클라우드 보러가기</a>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="introduce_comentbar">
                <h1 className="introduce_comentbar_h1">Why do I need cloud calculations?</h1>
                <div className="introduce_comentbar_set">
                    <p className="introduce_comentbar_p">1. 비용 효율성</p>
                    <p className="introduce_comentbar_p_sub">클라우드 서비스는 일반적으로 사용한 만큼 비용을 지불하는 방식(Pay-As-You-Go)을 따릅니다. 따라서 필요한 서비스와 리소스를 정확히 산정하면 불필요한 비용을 절감할 수 있습니다.</p>
                </div>
                <div className="introduce_comentbar_set">
                    <p className="introduce_comentbar_p">2. 성능 최적화</p>
                    <p className="introduce_comentbar_p_sub">클라우드 리소스의 적절한 산정은 애플리케이션의 성능을 최적화하는 데 도움이 됩니다. 예를 들어, CPU, 메모리, 스토리지 등의 리소스를 적절히 분배하면 시스템 전체의 성능이 향상될 수 있습니다.</p>
                </div>
                <div className="introduce_comentbar_set">
                    <p className="introduce_comentbar_p">3. 스케일링 계획</p>
                    <p className="introduce_comentbar_p_sub">클라우드 산정을 통해 현재의 리소스 사용량을 파악하고, 미래의 성장에 따른 리소스 필요량을 예측할 수 있습니다. 이는 조직이 스케일링 계획을 수립하는 데 중요한 정보를 제공합니다.</p>
                </div>
                <div className="introduce_comentbar_set">
                    <p className="introduce_comentbar_p">4. 보안 및 규정 준수</p>
                    <p className="introduce_comentbar_p_sub">클라우드 산정을 통해 데이터의 위치, 액세스 권한, 보안 설정 등을 확인하고, 필요한 보안 조치를 취하거나 규정 준수를 확인할 수 있습니다.</p>
                </div>    
            </div>
            <div className="introduce_footerbar">
                <button className="navigateResultPage" onClick={navigateToResultListPage}>
                    클라우드 산정하러 가기
                </button>
            </div>
        </div>
    );
}


export default Introduce;