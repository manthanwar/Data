const data = {};

data.title = 'Natural Gas (NG:NMX) Historical Data';
data.subtitle = 'USD per MMBtu';
data.notes = '';
data.source =
 '<a href="https://www.nasdaq.com/market-activity/commodities/ng-nmx/historical" target="_blank">Nasdaq</a>';

data.csv = `Date,Close/Last,Volume,Open,High,Low
11/08/2024,2.669,145284,2.694,2.748,2.643
11/07/2024,2.693,151595,2.711,2.778,2.656
11/06/2024,2.747,152878,2.679,2.796,2.66
11/05/2024,2.67,148363,2.789,2.818,2.651
11/04/2024,2.781,195339,2.56,2.795,2.514
11/01/2024,2.663,153115,2.702,2.724,2.632
10/31/2024,2.707,172795,2.813,2.83,2.688
10/30/2024,2.845,159105,2.905,2.919,2.77
10/29/2024,2.859,138923,2.841,2.908,2.794
10/28/2024,2.863,237175,3.044,3.044,2.801
10/25/2024,2.56,61265,2.531,2.579,2.46
10/24/2024,2.522,131313,2.40,2.582,2.373
10/23/2024,2.342,136581,2.301,2.442,2.258
10/22/2024,2.311,177976,2.364,2.375,2.271
10/21/2024,2.312,146776,2.264,2.369,2.21
10/18/2024,2.258,144208,2.349,2.37,2.248
10/17/2024,2.347,121883,2.377,2.417,2.338
10/16/2024,2.367,156517,2.488,2.497,2.358
10/15/2024,2.498,142729,2.482,2.55,2.445
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
