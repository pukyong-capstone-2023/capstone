import jsonData from "../data.js";

function Chart() {
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

      console.log(jsonData)
    return(
        <div className="content">
            <div className="chart">
                <canvas id="chart" width="300" height="200"></canvas>
        </div>
    </div>
    );
};

export default Chart;