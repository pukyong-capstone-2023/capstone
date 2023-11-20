
const RecommendedCloud = ({data}) => {


    return (
        <div className="col-12 border mb-2">
            {
                data.length === 0? "": <CloudScaffold data={data} />
            }
        </div>
    )

}


const CloudScaffold = ({data}) => {
    const cheapest = data.sort((l,r) => l["Cost per hour"] - r["Cost per hour"])[0];
    return (
        <div className="row m-2">
            <div className="col-6">
                <h3>Cloud</h3>
                <p>{cheapest.Vender}</p>
            </div>
            <div className="col-6">
                <h3>Name</h3>
                <p>{cheapest.Name}</p>
            </div>
            <div className="col-6">
                <h3>vCPU</h3>
                <p>{cheapest.vCPU}</p>
            </div>
            <div className="col-6">
                <h3>Memory</h3>
                <p>{cheapest["Memory(GiB)"]}</p>
            </div>
            <div className="col-12">
                <h3>이모저모</h3>
                <p>{cheapest.etc}</p>
            </div>
        </div>
    )
}

export default RecommendedCloud;