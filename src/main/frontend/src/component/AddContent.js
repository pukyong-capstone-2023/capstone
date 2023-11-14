import './AddContent.css'

function AddContent() {
    return (
        <>
            <hr />
            <div className="caution">
                <h3>주의사항</h3>
                <blockquote className='caution_cloud'>
                    <p>NCloud : Naver Cloud의 메모리 크기는 GB 단위입니다.</p>
                </blockquote>
                <blockquote className='caution_cloud'>
                    <p>AWS : AWS 리전에 하나 이상의 인스턴스는 시간당 2$ 가 추가됩니다.</p>
                </blockquote>
                <blockquote className='caution_cloud'>
                    <p>GCP : 코어당 두개의 스레드가 추가됩니다.</p>
                </blockquote>
            </div>
        </>
    );
};

export default AddContent;