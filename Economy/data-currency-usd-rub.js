const data = {};

data.title = 'US Dollar Russian Ruble (USDRUB) Historical';
data.subtitle = '';
data.notes = '';
data.source =
 '<a href="https://www.nasdaq.com/market-activity/currencies/usdrub/historical" target="_blank">Nasdaq</a>';

data.csv = `Date,Close/Last,Volume,Open,High,Low
11/08/2024,97.5955,N/A,97.5955,98.21,96.90
11/07/2024,97.9851,N/A,97.9851,98.0256,97.9742
11/06/2024,97.22,N/A,97.22,97.2542,97.1954
11/05/2024,96.5001,N/A,96.5001,99.0167,96.4996
11/04/2024,98.9991,N/A,98.9991,99.0221,98.9314
11/03/2024,97.7167,N/A,97.7167,97.9747,97.663
11/01/2024,97.9955,N/A,97.9955,98.25,97.00
10/31/2024,97.3772,N/A,97.3772,97.3835,97.3532
10/30/2024,97.0272,N/A,97.0272,97.0471,96.9787
10/29/2024,97.50,N/A,97.50,97.6113,97.4669
10/28/2024,97.25,N/A,97.25,97.7042,97.2217
10/27/2024,97.3494,N/A,97.3494,97.358,97.1994
10/25/2024,97.2455,N/A,97.2455,97.35,96.375
10/24/2024,96.2532,N/A,96.2532,96.2831,96.2274
10/23/2024,95.8839,N/A,95.8839,95.9648,95.8661
10/22/2024,95.7514,N/A,95.7514,95.7731,95.7201
10/21/2024,96.7991,N/A,96.7991,96.8083,96.7591
10/20/2024,95.891,N/A,95.891,95.9484,95.8536
10/18/2024,96.70,N/A,96.70,97.25,95.25
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
