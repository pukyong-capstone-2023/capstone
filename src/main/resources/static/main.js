import jsonData from "./data.js";

const MONTH = 30;
let chart;

// USD -> WON 변환
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

const ctx = document.getElementById("chart");
const labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

let fixedMemory = -1;
let fixedVCpu = -1;
let fixedPeriod = -1;
let fixedList = ["AWS", "GCP", "Naver Clould"];

function condition(element) {
  if (fixedList.length == 0) {
    return false;
  }

  if (fixedMemory == -1 && fixedVCpu == -1) {
    return fixedList.includes(element["Vender"]);
  }

  console.log(element["Vender"]);
  console.log(fixedList.includes(element["Vender"]));

  if (fixedMemory == -1 && fixedVCpu == -1) {
    return (
      element["Memory(GiB)"] == fixedMemory &&
      element["vCPU"] == fixedVCpu &&
      fixedList.includes(element["Vender"])
    );
  }

  if (fixedMemory == -1) {
    return (
      element["vCPU"] == fixedVCpu && fixedList.includes(element["Vender"])
    );
  }

  if (fixedVCpu == -1) {
    return (
      element["Memory(GiB)"] == fixedMemory &&
      fixedList.includes(element["Vender"])
    );
  }

  return (
    element["Memory(GiB)"] == fixedMemory &&
    element["vCPU"] == fixedVCpu &&
    fixedList.includes(element["Vender"])
  );
}

makeChart();

function makeChart() {
  if (fixedPeriod == -1) {
    makeLineChart();
  } else {
    makeBarChart();
  }
}

function makeLineChart() {
  const lineDataset = [];
  jsonData.forEach((element) => {
    if (condition(element)) {
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      var obj = {
        label: element.Vender + " : " + element.Name,
        data: [
          element["Cost per hour"] * 1 * MONTH,
          element["Cost per hour"] * 2 * MONTH,
          element["Cost per hour"] * 3 * MONTH,
          element["Cost per hour"] * 4 * MONTH,
          element["Cost per hour"] * 5 * MONTH,
          element["Cost per hour"] * 6 * MONTH,
          element["Cost per hour"] * 7 * MONTH,
          element["Cost per hour"] * 8 * MONTH,
          element["Cost per hour"] * 9 * MONTH,
          element["Cost per hour"] * 10 * MONTH,
          element["Cost per hour"] * 11 * MONTH,
          element["Cost per hour"] * 12 * MONTH,
        ],
        fill: false,
        borderColor: "#" + randomColor,
        tension: 0.1,
      };
      lineDataset.push(obj);
    }
  });

  const data = {
    labels: labels,
    datasets: lineDataset,
  };

  const config = {
    type: "line",
    data: data,
  };

  if (chart == null) {
    chart = new Chart(ctx, config);
  } else {
    chart.destroy();
    chart = new Chart(ctx, config);
  }
}

function makeBarChart() {
  const barDataSet = [];
  jsonData.forEach((element) => {
    if (condition(element)) {
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      var obj = {
        label: element.Vender + ":" + element.Name,
        data: [Math.round(element["Cost per hour"] * fixedPeriod * MONTH)],
        borderColor: ["#" + randomColor],
        borderWidth: 1,
      };
      barDataSet.push(obj);
    }
  });
  const sortedbarDataSet = Array.from(barDataSet).sort(
    (a, b) => a.data[0] - b.data[0]
  );

  const data = {
    labels: [fixedPeriod + "개월 동안 사용량"],
    datasets: sortedbarDataSet,
  };

  const config = {
    type: "bar",
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };

  if (chart == null) {
    chart = new Chart(ctx, config);
  } else {
    chart.destroy();
    chart = new Chart(ctx, config);
  }
}

let checkboxes = document.querySelectorAll("input[type=checkbox][name=cloud]");
let enabledSettings = [];

checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener("change", function () {
    enabledSettings = Array.from(checkboxes)
      .filter((i) => i.checked)
      .map((i) => i.value);

    fixedList = enabledSettings;
    makeChart();
  });
});

let period = document.querySelector("#period");
let periodButton = document.querySelector("#period-btn");
periodButton.addEventListener("click", function () {
  if (isNaN(period.value)) {
    alert("기간은 숫자만 입력할 수 있습니다.");
    return;
  }

  if (period.value < 0) {
    alert("기간은 1 이상의 숫자만 입력할 수 있습니다.");
    return;
  }

  if (period.value == 0) {
    fixedPeriod = -1;
  } else {
    fixedPeriod = period.value;
  }

  makeChart();
});

let vCPU = document.querySelector("#vcpu");
vCPU.addEventListener("change", function () {
  fixedVCpu = vCPU.value;
  makeChart();
});

let memory = document.querySelector("#memory");
memory.addEventListener("change", function () {
  fixedMemory = memory.value;
  makeChart();
});
