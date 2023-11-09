function AddContent(){
    return(
        <div>
            <h3>주의사항</h3>
            <blockquote>
                <p>
                    Naver Cloud의 메모리 크기는 GB 단위입니다.
                </p>
                <footer>
                    NCloud
                </footer>
            </blockquote>
            <blockquote>
                <p>
                    AWS 리전에 하나 이상의 인스턴스는 시간당 2$ 가 추가됩니다.
                </p>
                <footer>
                    AWS
                </footer>
            </blockquote>
        </div>
    );
};

export default AddContent;