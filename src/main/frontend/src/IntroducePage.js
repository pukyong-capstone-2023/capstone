import { useNavigate } from "react-router-dom";
import './IntroducePage.css';
import './ResultListPage.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';


function Introduce() {
    const navigate = useNavigate();
    const navigateToResultListPage = () => {
        navigate('/ResultListPage');
    }

    return (
        <div>
            <div className="introduce_headerbar" style={{textAlign:'lte'}}>
                <Navbar className="bg-custom">
                    <Container>
                        <h1 style={{ color: '#ffffff', fontSize : '30px', fontWeight :'bold' }}>Team 올린엄지</h1>
                    </Container>
                </Navbar>
            </div>
            <div className="introduce_slidercontentbar">
                <Carousel>
                    <Carousel.Item>
                        <div className='slidercontents_aws'>
                            <div className='wrapText'>
                                <h1>아마존 클라우드 보러가기</h1>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='slidercontents_ncloud'>
                            <div className='wrapText'>
                                <h1>네이버 클라우드 보러가기</h1>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='slidercontents_micro'>
                            <div className='wrapText'>
                                <h1>마이크로소프트 클라우드 보러가기</h1>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='slidercontents_samsung'>
                            <div className='wrapText'>
                                <h1>삼성 클라우드 보러가기</h1>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="introduce_comentbar">
                <h2>클라우드 산정이 필요한 이유를 넣음 좋을거 같음</h2>
            </div>
            <div className="introduce_footerbar">
                <Button className="navigateResultPage" onClick={navigateToResultListPage}>클라우드 산정하기</Button>
            </div>
        </div>
    );
}


export default Introduce;