// Alert banner

const alert = document.getElementById('alert')

alert.innerHTML = `
  <div class="alert-banner">
    <p><strong> Alert</strong> You have <strong>5</strong> overdue tasks to complete</p>
    <p class="alert-banner-close">x </p>
  </div>`

// closing alert banner
alert.addEventListener('click', (e) => {
  const element = e.target;
  if (element.classList.contains("alert-banner-close")) {
    alert.style.display = "none"
  }
});

//Traffic Chart Data
let trafficData = {
  labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
    "4-10", "11-17", "18-24", "25-31"
  ],
  datasets: [{
    data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
      2500
    ],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,
  }]
};

// creates line chart attached to <canvas id="traffic-chart"></canvas> on line 113 in index.html
const trafficCanvas = document.getElementById('traffic-chart').getContext('2d');
let lineChart = new Chart(trafficCanvas, {
  // The type of chart we want to create
  type: 'line',
  // The data for our dataset
  data: {
    labels: trafficData.labels,
    datasets: trafficData.datasets
  },
  // Configuration options go here
  options: {}
});

//Bar graph

const dailyCanvas = document.getElementById("daily-chart");

// data for daily traffic bar chart
const dailyData = {
  labels: ["S", "M", "T", "W", "T", "F", "S"],
  datasets: [{
    label: '# of Hits',
    data: [75, 115, 175, 125, 225, 200, 100],
    backgroundColor: '#7477BF',
    borderWidth: 1
  }]
};
const dailyOptions = {
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true
      }
    }]
  },
  legend: {
    display: false
  }
};

let dailyChart = new Chart(dailyCanvas, {
  // The type of chart we want to create
  type: 'bar',
  // The data for our dataset
  data: {
    labels: dailyData.labels,
    datasets: dailyData.datasets,
  },
  // Configuration options go here
  options: dailyOptions
});

const mobileCanvas = document.getElementById("mobile-chart");


let mobileData = {
  labels: ['Phones', 'Tablets', 'Desktop'],
  datasets: [{
    data: [15, 20, 65],
    backgroundColor: ['rgb(115,177,191)', 'rgb(129,201,143)', 'rgb(116,119,191)']
  }]
};

let mobileChart = new Chart(mobileCanvas, {
  // The type of chart we want to create
  type: 'doughnut',
  // The data for our dataset
  data: {
    labels: mobileData.labels,
    datasets: mobileData.datasets,
  },
  // Configuration options go here
  options: {
    legend: {
      position: 'right',
    },
  }
});