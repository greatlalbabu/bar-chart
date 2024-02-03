const ctx = document.getElementById('myChart');
  
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June'],
    datasets: [{
      label: 'Monthly Sales',
      data: [80, 30, 130, 50, 100, 80],
      backgroundColor: "rgba(100, 300, 30, 0.70)",

      borderWidth: 1

    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});


new Chart(MY_CHART,CONFIG);

anime({
  targets:MY_CHART,
  scale:1.5,
  duration:3000,
})

setTimeout(()=>{
  anime({
    targets:MY_CHART,
    scale:1,
    duration:5000
  })
},3000);