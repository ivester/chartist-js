new Chartist.Spider('.ct-chart', {
  labels: ['HTML', 'CSS', 'JS', 'jQuery', 'AngularJS'],
  series: [{
    name: 'soldier 1',
    data: [12, 9, 7, 8, 5]
  }, {
    name: 'soldier 2',
    data: [2, 1, 3.5, 7, 3]
  }, {
    name: 'soldier 3',
    data: [1, 3, 4, 5, 6]
  }]
}, {
  fullWidth: true,
  chartPadding: {
    right: 40
  },
  width: 800,
  height: 600
});