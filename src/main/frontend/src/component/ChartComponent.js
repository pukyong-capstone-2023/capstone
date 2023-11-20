import 'chart.js/auto'
import { Line } from 'react-chartjs-2';

function ChartComponent({data}) {


    const wonData = convertUSDtoWON(data);
    const lineData = buildLineData(wonData);

    const scaffold = {
        labels: Array.from({length: 12}, (_, i) => i + 1),
        datasets: [
            ...lineData
        ],
    };

    return(
        <div className='col-12 mb-3'>
            <Line data={scaffold} />
        </div>
    );
};

export default ChartComponent;

const convertUSDtoWON = (jsonData) => {
    // USD -> WON 변환
    return jsonData.map((element) => {
        const newElement = {...element};
        if (newElement["Currency exchange rates"] === "USD") {
            newElement["Currency exchange rates"] = "WON";
            newElement["Cost per hour"] = Math.round(Number(newElement["Cost per hour"]) * 1290.45
        );
        } else newElement["Cost per hour"] = Number(element["Cost per hour"]);
        return newElement;
    });
}

const buildLineData = (data) => {
    return data.map(element => {
        const ret = {
            type: 'line',
            label: element.Vender + " : " + element.Name,
            borderColor: '#' + Math.floor(Math.random() * 16777215).toString(16),
            borderWidth: 2,
            data: [...Array(12).keys()].map((n) => element["Cost per hour"] * n * 30),
        }
        return ret
    })
}