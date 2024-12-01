const data = {};

data.title = 'Euro US Dollar (EURUSD) Historical';
data.subtitle = '';
data.notes = '';
data.source =
 '<a href="https://www.nasdaq.com/market-activity/currencies/eurusd/historical" target="_blank">Nasdaq</a>';

data.csv = `Date,Close/Last,Volume,Open,High,Low
11/08/2024,1.0718,N/A,1.0718,1.0806,1.0687
11/07/2024,1.0782,N/A,1.0804,1.0806,1.0776
11/06/2024,1.0737,N/A,1.0728,1.0746,1.0713
11/05/2024,1.0769,N/A,1.0769,1.0938,1.0719
11/04/2024,1.0875,N/A,1.0875,1.0881,1.0872
11/03/2024,1.0899,N/A,1.0834,1.0905,1.087
11/01/2024,1.0833,N/A,1.0883,1.0905,1.0832
10/31/2024,1.0877,N/A,1.0883,1.0889,1.0874
10/30/2024,1.085,N/A,1.0855,1.0861,1.0844
10/29/2024,1.0814,N/A,1.0818,1.0827,1.0813
10/28/2024,1.081,N/A,1.0812,1.0819,1.0806
10/27/2024,1.0785,N/A,1.0785,1.0802,1.0783
10/25/2024,1.0796,N/A,1.0827,1.084,1.0793
10/24/2024,1.0821,N/A,1.0827,1.0829,1.0819
10/23/2024,1.0787,N/A,1.0787,1.079,1.0779
10/22/2024,1.0795,N/A,1.0795,1.0801,1.0792
10/21/2024,1.0819,N/A,1.0815,1.0821,1.0814
10/20/2024,1.0867,N/A,1.0867,1.0872,1.0861
10/18/2024,1.0867,N/A,1.0831,1.087,1.0825
10/17/2024,1.0838,N/A,1.0831,1.0841,1.0825
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
