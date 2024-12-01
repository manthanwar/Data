const data = {};

data.title = 'Crude Oil (CL:NMX) Historical Data';
data.subtitle = 'USD per barrel';
data.notes = '';
data.source =
 '<a href="https://www.nasdaq.com/market-activity/commodities/cl-nmx/historical" target="_blank">Nasdaq</a>';

data.csv = `Date,Close/Last,Volume,Open,High,Low
11/08/2024,70.38,318943,72.21,72.25,69.99
11/07/2024,72.36,314954,71.87,72.88,70.66
11/06/2024,71.69,358734,72.02,72.63,69.74
11/05/2024,71.99,223278,71.62,72.67,71.29
11/04/2024,71.47,264455,70.29,71.81,70.25
11/01/2024,69.49,293491,70.44,71.45,69.32
10/31/2024,69.26,284970,69.10,70.81,68.30
10/30/2024,68.61,266967,67.47,69.17,67.28
10/29/2024,67.21,273710,68.02,68.52,66.72
10/28/2024,67.38,390733,68.98,69.00,66.92
10/25/2024,71.78,266306,70.33,71.92,69.96
10/24/2024,70.19,269010,71.02,72.34,69.77
10/23/2024,70.77,276680,71.35,71.72,70.13
10/22/2024,71.74,314816,69.96,72.09,69.35
10/21/2024,70.04,282223,69.48,70.39,68.46
10/18/2024,69.22,73560,70.75,71.23,68.69
10/17/2024,70.67,170974,70.68,71.11,69.44
10/16/2024,70.39,203070,70.99,71.31,69.64
10/15/2024,70.58,308865,71.51,72.12,69.71
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
 axisLabelX: { text: 'Date' },
 axisLabelY: { text: 'Price USD per MMBtu' }
};

data.option = {
 // xOff: 0,
 // yOff: 0,
 dateFormat: 'mm/dd/yyyy',
 columnsToPlot: [1], // [1,2,3,4] // 0 for date
 // axisLimit: [20201110, 20241104, 0, 30],
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
  strokeDasharray: ['4', '1', '1']
 }
};

export default data;
