const data = {};

data.title = 'Platinum (PL:NMX) Historical Data';
data.subtitle = 'USD/Oz';
data.notes = '';
data.source =
 '<a href="https://www.nasdaq.com/market-activity/commodities/pl-nmx/historical" target="_blank">Nasdaq</a>';

data.csv = `Date,Close/Last,Volume,Open,High,Low
11/08/2024,978.50,25384,1004.60,1007.80,972.50
11/07/2024,999.10,22673,992.30,1005.60,981.60
11/06/2024,992.80,33974,1007.40,1008.50,971.80
11/05/2024,1006.70,17708,988.70,1012.00,986.70
11/04/2024,990.50,20169,1003.00,1009.50,986.50
11/01/2024,1002.90,21300,999.90,1014.20,994.20
10/31/2024,999.60,26873,1022.60,1022.90,993.00
10/30/2024,1021.70,29520,1062.70,1064.60,1018.90
10/29/2024,1059.30,20048,1044.00,1063.40,1042.50
10/28/2024,1046.80,19071,1034.70,1049.60,1025.50
10/25/2024,1036.70,24981,1038.00,1038.80,1012.60
10/24/2024,1033.60,26049,1029.20,1053.40,1028.60
10/23/2024,1029.70,24078,1041.70,1048.70,1024.10
10/22/2024,1041.40,22206,1016.50,1042.70,1014.10
10/21/2024,1016.80,24480,1029.00,1035.40,1014.00
10/18/2024,1024.50,23249,1005.30,1027.60,1000.80
10/17/2024,1005.80,24202,1006.10,1022.90,1000.10
10/16/2024,1002.60,18032,995.20,1012.50,994.80
10/15/2024,996.60,20698,1003.30,1009.30,983.70
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
