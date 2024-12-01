const data = {};

data.title = 'US Dollar Japanese Yen (USDJPY) Historical';
data.subtitle = '';
data.notes = '';
data.source =
 '<a href="https://www.nasdaq.com/market-activity/currencies/usdjpy/historical" target="_blank">Nasdaq</a>';

data.csv = `Date,Close/Last,Volume,Open,High,Low
11/08/2024,152.64,N/A,152.93,153.37,152.14
11/07/2024,152.75,N/A,152.93,153.37,152.55
11/06/2024,154.12,N/A,154.63,154.72,153.93
11/05/2024,153.69,N/A,151.60,154.34,151.29
11/04/2024,152.47,N/A,152.13,152.50,152.10
11/03/2024,151.85,N/A,152.98,152.58,151.60
11/01/2024,152.99,N/A,152.03,153.10,151.79
10/31/2024,152.38,N/A,152.38,152.41,151.79
10/30/2024,153.05,N/A,153.41,153.59,152.95
10/29/2024,153.32,N/A,153.32,153.44,153.07
10/28/2024,153.03,N/A,153.03,153.37,152.85
10/27/2024,153.61,N/A,152.30,153.88,152.67
10/25/2024,152.30,N/A,151.82,152.38,151.46
10/24/2024,151.88,N/A,151.82,152.11,151.59
10/23/2024,152.41,N/A,152.41,152.83,152.34
10/22/2024,151.64,N/A,151.06,151.80,151.02
10/21/2024,150.94,N/A,150.94,150.99,150.50
10/20/2024,149.22,N/A,149.51,149.65,149.09
10/18/2024,149.53,N/A,150.20,150.29,149.37
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
