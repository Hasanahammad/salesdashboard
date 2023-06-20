new Chart(document.getElementById("bar-chart"), {
  type: 'line',
  data: {
    labels: ["1900", "1950", "222", "222", "1900", "1950", "1999", "2050"],
    datasets: [
      {
        label: "Africa",
        backgroundColor: "#3e95cd",
        borderColor: "#ffff",
        data: [133, 221, 783, 222, 133, 221, 783, 2478]
      }
    ]
  },
  options: {
    maintainAspectRatio: true,
    title: {
      display: true,
      text: 'Population growth (millions)'
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        intersect: false
      }
    },
    scales: {
      x: {
        grid: {
          zeroLineColor: 'transparent',
          display: false
        },
        ticks: {
          display: false
        }
      },
      y: {
        grid: {
          zeroLineColor: 'transparent',
          display: false
        },
        ticks: {
          display: false
        }
      }
    },
    elements: {
      line: {
        borderWidth: 1
      },
      point: {
        radius: 2,
        hitRadius: 10,
        hoverRadius: 4
      }
    }
  }
});

new Chart(document.getElementById("bar-chart1"), {
  type: 'pie',
  data: {
    labels: ["1900", "1950", "222", "222", "1900", "1950", "1999", "2050"],
    datasets: [
      {
        label: "Africa",
        backgroundColor: ['rgb(234, 229, 9)',
          'rgb(125, 206, 19)',
          'rgb(91, 179, 24)',
          'rgb(43, 122, 11)'],
        data: [133, 221, 783, 222, 133, 221, 783, 2478],
        "borderWidth": "0", circumference: 180,
        rotation: 270,
      }
    ]
  },
  options: {
    plugins: {
      legend: {
        display: false
      }
    },
  }
});

new Chart(document.getElementById("bar-chart2"), {
  type: 'doughnut',
  data: {
    labels: ["1900", "1950", "222", "222", "1900", "1950", "1999", "2050"],
    datasets: [
      {
        label: "Africa",
        backgroundColor: ['rgb(166, 108, 255)',
          'rgb(156, 158, 254)',
          'rgb(175, 180, 255)',
          'rgb(177, 225, 255)'],
        borderColor: "#ffff",
        data: [133, 221, 783, 222, 133, 221, 783, 2478],
        "borderWidth": "0", cutout: "70%", circumference: 180,
        rotation: 270
      }
    ]
  },
  options: {
    maintainAspectRatio: true,
    title: {
      display: true,
      text: 'Population growth (millions)'
    },
    plugins: {
      legend: {
        display: false
      }
    },
    elements: {
      line: {
        borderWidth: 5
      },
      point: {
        radius: 1,
        hitRadius: 10,
        hoverRadius: 4
      }
    }
  }
});

new Chart(document.getElementById("bar-chart3"), {
  type: 'bar',
  data: {
    labels: ["1900", "1950", "222", "222", "1900", "1950", "1999", "2050"],
    datasets: [
      {
        label: "Africa",
        backgroundColor: ['rgb(34, 87, 122)',
          'rgb(56, 163, 165)',
          'rgb(87, 204, 153)',
          'rgb(128, 237, 153)'],
        borderColor: "#ffff",
        data: [133, 221, 783, 222, 133, 221, 783, 2478]

      }
    ]
  },
  options: {
    maintainAspectRatio: true,
    title: {
      display: true,
      text: 'Population growth (millions)'
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        intersect: false
      }
    },
    scales: {
      x: {
        grid: {
          zeroLineColor: 'transparent',
          display: false
        },
        ticks: {
          display: false
        }
      },
      y: {
        grid: {
          zeroLineColor: 'transparent',
          display: false
        },
        ticks: {
          display: false
        }
      }
    },
    elements: {
      line: {
        borderWidth: 1
      },
      point: {
        radius: 1,
        hitRadius: 10,
        hoverRadius: 4
      }
    }
  }
});

new Chart(document.getElementById("doughnut-chart"), {
  type: 'doughnut',
  data: {
    labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
    datasets: [
      {
        label: "Population (millions)",
        backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
        data: [2478, 5267, 734, 784, 433], "borderWidth": "0", cutout: "70%"
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Predicted world population (millions) in 2050'
    }
  }
});

function dashboard() {
  var one = document.getElementById('dashboard');
  var two = document.getElementById('sales');
  var three = document.getElementById('scm');
  var four = document.getElementById('production');
  var five = document.getElementById('finance');
  one.style.display = "block"
  two.style.display = "none"
  three.style.display = "none"
  four.style.display = "none"
  five.style.display = "none"
}

function sales() {
  var one = document.getElementById('dashboard');
  var two = document.getElementById('sales');
  var three = document.getElementById('scm');
  var four = document.getElementById('production');
  var five = document.getElementById('finance');
  one.style.display = "none"
  two.style.display = "block"
  three.style.display = "none"
  four.style.display = "none"
  five.style.display = "none"
}

function scm() {
  var one = document.getElementById('dashboard');
  var two = document.getElementById('sales');
  var three = document.getElementById('scm');
  var four = document.getElementById('production');
  var five = document.getElementById('finance');
  one.style.display = "none"
  two.style.display = "none"
  three.style.display = "block"
  four.style.display = "none"
  five.style.display = "none"
}

function production() {
  var one = document.getElementById('dashboard');
  var two = document.getElementById('sales');
  var three = document.getElementById('scm');
  var four = document.getElementById('production');
  var five = document.getElementById('finance');
  one.style.display = "none"
  two.style.display = "none"
  three.style.display = "none"
  four.style.display = "block"
  five.style.display = "none"

  document.getElementById('production-table').innerHTML = '<div class="container"><div class="spinner-grow" role="status"></div></div>';
  var url = "http://localhost:8080/zab/Production";
  if (window.ActiveXObject) {
    httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
  }
  else (window.XMLHttpRequest)
  {
    httpRequest = new XMLHttpRequest();
  }
  httpRequest.open("GET", url, true);
  httpRequest.onreadystatechange = function () {
    document.getElementById('production-table').innerHTML = httpRequest.responseText
  };
  httpRequest.send(null);
  
}

function finance() {
  var one = document.getElementById('dashboard');
  var two = document.getElementById('sales');
  var three = document.getElementById('scm');
  var four = document.getElementById('production');
  var five = document.getElementById('finance');
  one.style.display = "none"
  two.style.display = "none"
  three.style.display = "none"
  four.style.display = "none"
  five.style.display = "block"
}

function salesqty() {
  document.getElementById('salesquot').innerHTML = '<div class="container"><div class="spinner-grow" role="status"></div></div>';
  var url = "http://localhost:8080/zab/salesqty";
  if (window.ActiveXObject) {
    httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
  }
  else (window.XMLHttpRequest)
  {
    httpRequest = new XMLHttpRequest();
  }
  httpRequest.open("GET", url, true);
  httpRequest.onreadystatechange = function () {
    document.getElementById('salesquot').innerHTML = httpRequest.responseText
  };
  httpRequest.send(null);
}

function salesdetail(xtornum) {
  document.getElementById('salesorddetail').innerHTML = '<div class="container"><div class="spinner-grow" role="status"></div></div>';
  var url = "http://localhost:8080/zab/salesdorddetail?xtornum=" + xtornum;

  if (window.ActiveXObject) {
    httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
  }
  else (window.XMLHttpRequest)
  {
    httpRequest = new XMLHttpRequest();
  }
  httpRequest.open("GET", url, true);
  httpRequest.onreadystatechange = function () {
    document.getElementById('salesorddetail').innerHTML = httpRequest.responseText
  };
  httpRequest.send(null);
}

function delivery() {
  document.getElementById('salesdelivery').innerHTML = '<div class="container"><div class="spinner-grow" role="status"></div></div>';
  var url = "http://localhost:8080/zab/delivery";

  if (window.ActiveXObject) {
    httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
  }
  else (window.XMLHttpRequest)
  {
    httpRequest = new XMLHttpRequest();
  }
  httpRequest.open("GET", url, true);
  httpRequest.onreadystatechange = function () {
    document.getElementById('salesdelivery').innerHTML = httpRequest.responseText
  };
  httpRequest.send(null);
}

window.onload = (event) => {
  // console.log("loaded api");
  // document.getElementById('totalincomediv').innerHTML = '<div class="container"><div class="spinner-grow" role="status"></div></div>';
  var url = "http://localhost:8080/zab/totalincome"
  // console.log(url);
  if (window.ActiveXObject) {
    httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
  }
  else (window.XMLHttpRequest)
  {
    httpRequest = new XMLHttpRequest();
  }
  httpRequest.open("GET", url, true);
  // httpRequest.onreadystatechange = function () {
  //   document.getElementById('totalincomediv').innerHTML = httpRequest.responseText
  // };
  httpRequest.send(null);
};

function arinvoice() {
  document.getElementById('arinvoice').innerHTML = '<div class="container"><div class="spinner-grow" role="status"></div></div>';
  var url = "http://localhost:8080/zab/arinvoice";

  if (window.ActiveXObject) {
    httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
  }
  else (window.XMLHttpRequest)
  {
    httpRequest = new XMLHttpRequest();
  }
  httpRequest.open("GET", url, true);
  httpRequest.onreadystatechange = function () {
    document.getElementById('arinvoice').innerHTML = httpRequest.responseText
  };
  httpRequest.send(null);
}



function pro() {
  var prodate = document.getElementById('prodate').value;
  //alert(prodate);
  
  document.getElementById('production-table').innerHTML = '<div class="container"><div class="spinner-grow" role="status"></div></div>';
  var url = "http://localhost:8080/zab/Production?prodate="+prodate;
  // alert(url);
  if (window.ActiveXObject) {
    httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
  }
  else (window.XMLHttpRequest)
  {
    httpRequest = new XMLHttpRequest();
  }
  httpRequest.open("GET", url, true);
  httpRequest.onreadystatechange = function () {
    document.getElementById('production-table').innerHTML = httpRequest.responseText
  };
  httpRequest.send(null);


}