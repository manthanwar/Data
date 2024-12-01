const data = {};

data.title = 'US Dollar Indian Rupee (USDINR) Historical';
data.subtitle = '';
data.notes = '';
data.source =
 '<a href="https://www.nasdaq.com/market-activity/currencies/usdinr/historical" target="_blank">Nasdaq</a>';

data.csv = `Date,Close/Last,Volume,Open,High,Low
11/08/2024,84.395,N/A,84.395,84.395,84.297
11/07/2024,84.3731,N/A,84.3731,84.438,84.246
11/06/2024,84.3155,N/A,84.3155,84.423,84.228
11/05/2024,84.1882,N/A,84.1882,84.368,84.109
11/04/2024,84.1243,N/A,84.1243,84.257,84.114
11/03/2024,84.0782,N/A,84.0782,84.183,84.049
11/01/2024,84.08,N/A,84.08,84.103,84.011
10/31/2024,84.0883,N/A,84.0883,84.175,84.078
10/30/2024,84.0791,N/A,84.0791,84.199,84.071
10/29/2024,84.0778,N/A,84.0778,84.151,84.053
10/28/2024,84.0755,N/A,84.0755,84.17,84.066
10/27/2024,84.0693,N/A,84.0693,84.102,84.067
10/25/2024,84.095,N/A,84.095,84.096,84.041
10/24/2024,84.0734,N/A,84.0734,84.184,84.064
10/23/2024,84.0725,N/A,84.0725,84.183,84.066
10/22/2024,84.093,N/A,84.093,84.195,84.083
10/21/2024,84.075,N/A,84.075,84.187,84.063
10/20/2024,84.0583,N/A,84.0583,84.085,84.042
10/18/2024,84.065,N/A,84.065,84.078,84.015
`;

data.csv = data.csv.replace('Volume,', '');
data.csv = data.csv.replace(/\//g, '');
data.csv = data.csv.replace(/N\/A/g, '')
data.csv = data.csv.replace(/,,/g, ',');


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
