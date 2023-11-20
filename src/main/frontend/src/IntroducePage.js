import { useNavigate } from "react-router-dom";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Container from 'react-bootstrap/Container';
import { Col, Row } from "react-bootstrap";
import AWSImage from "./img/AWSCloudimg.png";
import GoogleImage from "./img/GCPCloudimg.png";
import NCloudImage from "./img/NCloudimg.jpeg";
import SamsungCloudImage from "./img/SAMCloudimg.jpg";
import AzureImage from "./img/MICloudimg.png";
import MoneyEffectImage from "./img/moneyeffect.png";
import OptimizationImage from "./img/optimization.png";
import ResourceImage from "./img/resource.png";
import PrivacyImage from "./img/privacy.png";

function Introduce() {
    const navigate = useNavigate();
    const navigateToResultListPage = () => {
        navigate('/ResultListPage');
    }


    return (
        <Container>
            <Row>
                <Col>
                    <Swiper
                        cssMode={true}
                        navigation={true}
                        pagination={true}
                        mousewheel={true}
                        keyboard={true}
                        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                        className="mySwiper"

                    >
                        <SwiperSlide style={{ height: '100%' }}>
                            <a className="slidecontents_a" href="https://docs.aws.amazon.com/ko_kr/pricing-calculator/latest/userguide/getting-started.html" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                                <img className="d-block w-50" src={AWSImage}></img>
                            </a>
                        </SwiperSlide>

                        <SwiperSlide style={{ height: '100%' }}>
                            <a className="slidecontents_a" href="https://www.ncloud.com/charge/calc/ko" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', marginTop: '50px' }}>
                                <img className="d-block w-50" src={NCloudImage} ></img>
                            </a></SwiperSlide>
                        <SwiperSlide style={{ height: '100%' }}>
                            <a className="slidecontents_a" href="https://cloud.google.com/products/calculator?hl=ko" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                                <img className="d-block w-50" src={GoogleImage} ></img>
                            </a></SwiperSlide>
                        <SwiperSlide style={{ height: '100%' }}>
                            <a className="slidecontents_a" href="https://www.digitalmarket.kr/web/service/detail.do?s=IAS-4-02-10233" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', marginTop: '50px' }}>
                                <img className="d-block w-50" src={SamsungCloudImage} ></img>
                            </a></SwiperSlide>
                        <SwiperSlide>
                            <a className="slidecontents_a" href="https://www.digitalmarket.kr/web/service/detail.do?s=IAS-4-02-10233" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                                <img className="d-block w-50" src={AzureImage} ></img>
                            </a></SwiperSlide>
                    </Swiper>
                </Col>
                <div style={{ marginTop: "70px" }}>
                    <h1 className="introduce_comentbar_h1" style={{ marginBottom: "30px" }}>클라우드 산정이 필요한 이유는?</h1>
                    <div class="row row-cols-1 row-cols-md-2 g-4">
                        <div class="col">
                            <div class="card" style={{ display: "flex", alignItems: "center" }}>
                                <img src={MoneyEffectImage} class="card-img-top" style={{ width: "300px", height: "300px" }} />
                                <div class="card-body">
                                    <h5 class="card-title">1. 비용 효율성</h5>
                                    <p class="card-text">클라우드 서비스는 일반적으로 사용한 만큼 비용을 지불하는 방식(Pay-As-You-Go)을 따릅니다. 따라서 필요한 서비스와 리소스를 정확히 산정하면 불필요한 비용을 절감할 수 있습니다.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card" style={{ display: "flex", alignItems: "center" }}>
                                <img src={OptimizationImage} class="card-img-top" style={{ width: "300px", height: "300px" }} />
                                <div class="card-body">
                                    <h5 class="card-title">2. 성능 최적화</h5>
                                    <p class="card-text">클라우드 리소스의 적절한 산정은 애플리케이션의 성능을 최적화하는 데 도움이 됩니다. 예를 들어, CPU, 메모리, 스토리지 등의 리소스를 적절히 분배하면 시스템 전체의 성능이 향상될 수 있습니다.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card" style={{ display: "flex", alignItems: "center" }}>
                                <img src={ResourceImage} class="card-img-top" style={{ width: "300px", height: "300px" }} />
                                <div class="card-body">
                                    <h5 class="card-title">3. 스케일링 계획</h5>
                                    <p class="card-text">클라우드 산정을 통해 현재의 리소스 사용량을 파악하고, 미래의 성장에 따른 리소스 필요량을 예측할 수 있습니다. 이는 조직이 스케일링 계획을 수립하는 데 중요한 정보를 제공합니다.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card" style={{ display: "flex", alignItems: "center" }}>
                                <img src={PrivacyImage} class="card-img-top" style={{ width: "300px", height: "300px" }} />
                                <div class="card-body">
                                    <h5 class="card-title">4. 보안 및 규정 준수</h5>
                                    <p class="card-text">클라우드 산정을 통해 데이터의 위치, 액세스 권한, 보안 설정 등을 확인하고, 필요한 보안 조치를 취하거나 규정 준수를 확인할 수 있습니다.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="introduce_footerbar" style={{ marginTop: "50px" }}>
                    {/* <button className="navigateResultPage" onClick={navigateToResultListPage}>
                        클라우드 산정하러 가기
                    </button> */}
                    <div class="d-grid gap-2">
                        <button class="btn btn-info" type="button" onClick={navigateToResultListPage}>클라우드 산정하러 가기</button></div>
                </div>
            </Row>
        </Container>
    );
}


export default Introduce;