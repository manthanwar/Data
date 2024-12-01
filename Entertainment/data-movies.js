const data = {};

data.title = `Box Office Earnings in First Two Weeks of Opening`;
data.subtitle = 'in millions of dollars (USD)';
data.notes = '';
data.source =
 '<a href="https://developers.google.com/chart/interactive/docs/gallery/linechart" target="_blank">Google Material Charts</a>';

data.csv = `Day, 'Guardians of the Galaxy','The Avengers', 'Transformers: Age of Extinction'
1,  37.8, 80.8, 41.8
2,  30.9, 69.5, 32.4
3,  25.4,   57, 25.7
4,  11.7, 18.8, 10.5
5,  11.9, 17.6, 10.4
6,   8.8, 13.6,  7.7
7,   7.6, 12.3,  9.6
8,  12.3, 29.2, 10.6
9,  16.9, 42.9, 14.8
10, 12.8, 30.9, 11.6
11,  5.3,  7.9,  4.7
12,  6.6,  8.4,  5.2
13,  4.8,  6.3,  3.6
14,  4.2,  6.2,  3.4
`;

data.layout = {
 divMainBox: {
  containerId: 'main',
  id: 'divMainBox'
 },
 // gridOn: false,
 numB: 3,
 clrB: 'pink',
 clrH: 'maroon'
};

data.grid = {
 majorNumX: 7,
 majorNumY: 6,
 title: { text: ' ' },
 axisLabelX: { text: 'Day since launch' },
 axisLabelY: { text: 'Earnings (USD million)' }
};

data.option = {
 xOff: 0,
 yOff: 0,
 axisLimit: [0, 15, -10, 90],
 // hasHeader: false,
 markerOn: true,
 marker: {
  size: Array(3).fill(6),
  fill: ['pink', 'lime', 'cyan'],
  stroke: ['blue', 'black', 'red'],
  strokeWidth: [2, 4, 4],
  strokeOpacity: [1, 1, 1],
  fillOpacity: [0.5, 0.5, 0.5]
 },
 line: {
  stroke: ['blue', 'maroon', 'purple'],
  strokeWidth: [2, 4, 4],
  strokeOpacity: [1, 1, 1],
  strokeDasharray: ['4 10', '1', '1']
 },

 title: 'Daily sugar and fat intake by country',
 titleX: 'Daily fat intake (g)',
 titleY: 'Daily sugar intake (g)',
 grid: {
  majorNumX: 6,
  majorNumY: 6
 },
 legend: { position: 'bottom' }
};

export default data;
