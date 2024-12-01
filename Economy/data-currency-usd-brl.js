const data = {};

data.title = 'US Dollar Brazilian Real (USDBRL) Historical';
data.subtitle = '';
data.notes = '';
data.source =
 '<a href="https://www.nasdaq.com/market-activity/currencies/usdbrl/historical" target="_blank">Nasdaq</a>';

data.csv = `Date,Close/Last,Volume,Open,High,Low
11/08/2024,5.7376,N/A,5.7376,5.7905,5.691
11/07/2024,5.6926,N/A,5.6923,5.6926,5.6914
11/06/2024,5.6774,N/A,5.6793,5.6798,5.6774
11/05/2024,5.7512,N/A,5.7508,5.7512,5.7512
11/04/2024,5.7921,N/A,5.7921,5.7921,5.7921
11/03/2024,5.8681,N/A,5.8681,5.8681,5.8681
11/01/2024,5.8698,N/A,5.7867,5.8747,5.753
10/31/2024,5.7927,N/A,5.7867,5.793,5.7873
10/30/2024,5.7629,N/A,5.763,5.7698,5.762
10/29/2024,5.7634,N/A,5.7604,5.7655,5.7587
10/28/2024,5.7117,N/A,5.7096,5.7132,5.7093
10/27/2024,5.7076,N/A,5.7073,5.7076,5.7076
10/25/2024,5.7083,N/A,5.6643,5.7195,5.6602
10/24/2024,5.6657,N/A,5.6643,5.6666,5.6617
10/23/2024,5.6903,N/A,5.6884,5.6909,5.6861
10/22/2024,5.6906,N/A,5.6894,5.6939,5.6891
10/21/2024,5.6898,N/A,5.6939,5.6954,5.6892
10/20/2024,5.6898,N/A,5.6898,5.6898,5.6898
10/18/2024,5.6912,N/A,5.6912,5.7026,5.6281
10/17/2024,5.6532,N/A,5.6546,5.6562,5.6519
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
