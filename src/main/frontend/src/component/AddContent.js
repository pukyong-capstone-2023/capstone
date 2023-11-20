// import './AddContent.css'

function AddContent() {
    return (
        <div class="card-group" style={{display: 'flex', justifyContent: 'center'}}>
            <div class="card border-info mb-3" style={{maxWidth: "18rem"}}>
                <div class="card-header">NCloud</div>
                <div class="card-body"><p class="card-text">Naver Cloud의 메모리 크기는 GB 단위입니다.</p></div>
            </div>
            <div class="card border-info mb-3" style={{maxWidth: "18rem"}}>
                <div class="card-header">AWS</div>
                <div class="card-body"><p class="card-text">AWS 리전에 하나 이상의 인스턴스는 시간당 2$ 가 추가됩니다</p></div>
            </div>
            <div class="card border-info mb-3" style={{maxWidth: "18rem"}}>
                <div class="card-header">GCP</div>
                <div class="card-body"><p class="card-text">코어당 두개의 스레드가 추가됩니다.</p></div>
            </div>
        </div>
    );
};

export default AddContent;