import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import './Footer.css';

function Footer() {
    const navigate = useNavigate();
    const navigateToResultListPage = () => {
        navigate('/');
    }

    return (
        <footer>
            <div className="coment">
                <div className="reference">
                    <p>References</p>
                </div>
                <ul>
                    <ol><a href="https://www.fin-ncloud.com/charge/region/ko">Naver Cloud</a></ol>
                    <ol><a href="https://aws.amazon.com/ko/ec2/pricing/dedicated-instances/">AWS</a></ol>
                    <ol><a href="https://cloud.google.com/compute/all-pricing?hl=ko">GCP</a></ol>
                </ul>
                <div className="introduce_footerbar">
                    <Button className="navigateIntroducePage" onClick={navigateToResultListPage}>메인페이지로 가기</Button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;