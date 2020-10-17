import React, { useEffect } from "react";
import Chart from "chart.js";
//import Axios from 'react';

export default function App() {
    
  useEffect(() => {
    const ctx = document.getElementById("myChart");
    const axios = require('axios');
 
// Make a request for a user with a given ID
axios.get('http://localhost:3001/budget')
  .then(function (response) {
      const chart_labels = []
      const chart_data = []
      console.log(response)
    // handle success
    //this.dataSource.datasets[0].backgroundColor = res.ranges
      for (var i = 0; i < response.data.myBudget.length; i++) {
        chart_data[i] = response.data.myBudget[i].budget
        chart_labels[i] = response.data.myBudget[i].title;
      }
    new Chart(ctx, {
        type: "pie",
        data: {
          //labels: ["Eat out", "Rent", "Groceries", "Gas", "Utilities", "Wireless", "Misc"],
          labels: chart_labels,
          datasets: [
            {
              label: "Budget for Each Item",
              data: chart_data,
              backgroundColor: ['#ffcd56','#ff6384','#36a2eb','#fd6b19','#5aff33','#3394ff','#fffa33'],
              borderColor: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange", "Magenta"],
              borderWidth: .5
            }
          ]
        }
      });
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
    
  });

  
  return (
    <div className="App">
      <canvas id="myChart" width="500" height="500" />
    </div>
  );
}
