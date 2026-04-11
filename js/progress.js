let ctx = document.getElementById('myChart').getContext('2d');

let chart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Study Hours',
      data: [2, 3, 1, 4, 2, 5, 3]
    }]
  }
});