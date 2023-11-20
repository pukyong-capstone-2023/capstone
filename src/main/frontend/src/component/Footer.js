// import './Footer.css';
// import '../IntroducePage.css';
import { Navbar } from "react-bootstrap";


function Footer() {

    return (
            <Navbar className="text-bg-secondary p-3" style={{ display:'grid'}}>
            <Navbar.Brand style={{marginLeft:"30px"}} >
                        <h5>Creaters</h5>
                        <p style={{ paddingLeft: '20px', marginTop: '4px'}}>이건창, 서정운, 이나겸, 쑤와디</p>
            </Navbar.Brand>
            <Navbar.Brand style={{marginLeft:"30px"}} >
                        <h5>Github Link</h5>
                        <p style={{ paddingLeft: '20px', marginTop: '4px' }}>http://...</p>
            </Navbar.Brand>
            <Navbar.Brand style={{marginLeft:"30px"}} >
                        <h5>Develops</h5>
                        <p style={{ paddingLeft: '20px', marginTop: '4px' }}>chart.js 사용..</p>
            </Navbar.Brand>
            </Navbar>
    );
};

export default Footer;