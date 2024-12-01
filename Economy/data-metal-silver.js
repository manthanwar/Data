const data = {};

data.title = 'Silver (SI:CMX) Historical Data';
data.subtitle = 'USD/Oz';
data.notes = '';
data.source =
 '<a href="https://www.nasdaq.com/market-activity/commodities/si-cmx" target="_blank">Nasdaq</a>';

data.csv = `Date,Close/Last,Volume,Open,High,Low
11/08/2024,31.449,69247,32.155,32.17,31.30
11/07/2024,31.855,73464,31.295,32.265,30.96
11/06/2024,31.331,119541,32.78,32.85,30.94
11/05/2024,32.775,46492,32.58,33.055,32.355
11/04/2024,32.609,49211,32.57,33.00,32.415
11/01/2024,32.681,66102,32.795,33.25,32.46
10/31/2024,32.796,90885,33.945,34.04,32.64
10/30/2024,34.075,71594,34.62,34.69,33.565
10/29/2024,34.441,73528,33.845,34.725,33.765
10/28/2024,34.001,61696,33.83,34.17,33.39
10/25/2024,33.779,67793,33.85,34.195,33.26
10/24/2024,33.795,76972,33.875,34.48,33.42
10/23/2024,33.839,98601,35.055,35.07,33.61
10/22/2024,35.041,82873,34.01,35.07,33.97
10/21/2024,34.078,102387,33.90,34.485,33.66
10/18/2024,33.234,100527,31.875,33.97,31.855
10/17/2024,31.774,61404,31.905,32.22,31.485
10/16/2024,31.974,48800,31.685,32.385,31.60
10/15/2024,31.756,52284,31.40,31.89,30.95
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

data.option = {
 x: 0,
 y: 0,
 // hasHeader: false,
 bubbleOn: true,
 bubbleSizeMin: 5,
 bubbleSizeMax: 30,
 stroke: 'black',
 strokeWidth: 4,
 strokeOpacity: 1,
 fill: 'none',
 fillOpacity: 1,
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
