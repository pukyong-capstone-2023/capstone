import data from '../data'

function ChartComponent() {

    // console.log(data)

    return(
        <>
            <div className="content">
                <div className="chart">
                    <canvas id="chart" width="300" height="200"></canvas>
                </div>
            </div>
        </>
    );
};

export default ChartComponent;


/*

        axios.get("/api/")
        .then(data => data.data)
        .then(jsonData => {
            jsonData.forEach((element) => {
                if (element["Currency exchange rates"] === "USD") {
                    element["Currency exchange rates"] = "WON";
                    element["Cost per hour"] = Math.round(
                    Number(element["Cost per hour"]) * 1290.45
                    );
                } else {
                    element["Cost per hour"] = Number(element["Cost per hour"]);
                }
            });
            return jsonData;
        })
//        .then(console.log)
*/