const ctx = document.getElementById('myChart');
  
// new Chart(ctx, {
//   type: 'line',
//   data: {
//     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//     datasets: [{
//       label: '# of Votes',
//       data: [12, 19, 3, 5, 2, 3],
//       borderWidth: 1
//     }]
//   },
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true
//       }
//     }
//   }
// });

const data = {
  labels: [],
  datasets: [{
    label: 'A random number',
    data: [],
    fill: false,
    borderColor: 'lightblue',
    tension: 0.1
  }]
};

const CONFIG = {
    type: 'line',
    data: data,
    options: {
        animations: {
        tension: {
            duration: 1500,
            easing: 'linear',
            from: 1,
            to: 0,
            loop: true
        }
        },
        scales: {
        y: { 
            min: 0,
            max: 100
        }
        }
    }
};

const chart = new Chart(ctx, CONFIG);

setInterval(()=>{
    const randomNumber = Math.floor(Math.random() * 100);
    chart.data.labels.push(chart.data.datasets[[0]].data.length);
    chart.data.datasets[[0]].data.push(randomNumber);
    chart.update();
},2300)

anime({
    targets:ctx,
    scale:1.1,
    duration:3000,
  })
  
  setTimeout(()=>{
    anime({
      targets:ctx,
      scale:1,
      duration:5000
    })
  },3000);