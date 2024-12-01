const data = {};

data.title = 'US Dollar Mexican Peso (USDMXN) Historical';
data.subtitle = '';
data.notes = '';
data.source =
 '<a href="https://www.nasdaq.com/market-activity/currencies/usdmxn/historical" target="_blank">Nasdaq</a>';

data.csv = `Date,Close/Last,Volume,Open,High,Low
11/08/2024,20.1711,N/A,20.1711,20.276,19.765
11/07/2024,19.836,N/A,19.795,19.8437,19.7912
11/06/2024,20.1625,N/A,20.08,20.212,20.0916
11/05/2024,20.712,N/A,20.097,20.774,20.094
11/04/2024,20.1195,N/A,20.091,20.1278,20.0949
11/03/2024,20.0842,N/A,20.267,20.267,20.0695
11/01/2024,20.267,N/A,20.267,20.298,19.912
10/31/2024,20.0282,N/A,20.012,20.0919,20.0138
10/30/2024,20.1766,N/A,20.1766,20.187,20.1457
10/29/2024,20.0662,N/A,20.0662,20.073,20.0425
10/28/2024,20.0491,N/A,20.023,20.0579,20.0255
10/27/2024,20.0005,N/A,19.95,20.0091,19.9383
10/25/2024,19.95,N/A,19.95,20.019,19.765
10/24/2024,19.8377,N/A,19.8377,19.845,19.8048
10/23/2024,19.82,N/A,19.82,19.8681,19.8152
10/22/2024,19.9733,N/A,19.9733,19.976,19.9305
10/21/2024,19.9445,N/A,19.9445,19.9949,19.9333
10/20/2024,19.917,N/A,19.849,19.9291,19.849
10/18/2024,19.849,N/A,19.849,19.91,19.6459
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
