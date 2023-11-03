import { useNavigate } from "react-router-dom";

function Introduce() {
    const navigate = useNavigate();
    const navigateToResultListPage = () => {
        navigate('/ResultListPage');
    }
    return(
        <div>
            <h1>환영합니다!</h1>
            <button onClick={navigateToResultListPage}>클라우드 비교하러 가기</button>
        </div>
    );
};

export default Introduce;