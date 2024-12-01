const data = {};

data.title = 'Natural Gas (NG:NMX) Historical Data';
data.subtitle = 'USD per MMBtu';
data.notes = '';
data.source =
 '<a href="https://developers.google.com/chart/interactive/docs/gallery/linechart" target="_blank">Google Material Charts</a>';

//region data csv
data.csv = `Date,Price,Volume
2024-11-04,1.35, 20
2024-11-01,1.42,30
2024-10-31,1.82, 20
2024-10-30,2.03, 40


`;
//endregion data csv

// data.csv = data.csv.replace(/-/g, '');
// console.log(data.csv);

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
 majorNumX: 4,
 majorNumY: 6,
 title: { text: ' ' },
 axisLabelX: { text: 'Date' },
 axisLabelY: { text: 'Price USD per MMBtu' }
};

data.option = {
 // xOff: 0,
 // yOff: 0,
 // hasHeader: true,
 // isAscending: true,
 dateFormat: 'yyyy-mm-dd',

 plotHeader: [1], // [1,2,3,4] // 0 for date
 // axisLimit: [-1, 19, 1, 3],
 markerOn: true,
 marker: {
  size: Array(3).fill(10),
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
