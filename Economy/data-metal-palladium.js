const data = {};

data.title = 'Palladium (PA:NMX) Historical Data';
data.subtitle = 'USD/Oz';
data.notes = '';
data.source =
 '<a href="https://www.nasdaq.com/market-activity/commodities/pa-nmx/historical" target="_blank">Nasdaq</a>';

data.csv = `Date,Close/Last,Volume,Open,High,Low
11/08/2024,992.20,7526,1029.00,1030.00,985.50
11/07/2024,1020.70,6227,1035.00,1046.00,1018.50
11/06/2024,1039.80,5980,1077.50,1079.50,1026.00
11/05/2024,1078.60,4502,1078.00,1098.00,1072.50
11/04/2024,1071.40,5831,1104.50,1124.00,1057.00
11/01/2024,1108.80,4676,1120.00,1143.50,1104.00
10/31/2024,1111.60,5028,1151.50,1151.50,1109.00
10/30/2024,1154.10,6082,1217.50,1220.00,1132.00
10/29/2024,1228.30,5044,1216.50,1255.00,1209.00
10/28/2024,1224.90,5953,1199.00,1229.50,1186.00
10/25/2024,1202.70,7923,1164.00,1220.00,1128.50
10/24/2024,1163.90,9772,1069.50,1173.00,1068.50
10/23/2024,1064.70,2603,1086.00,1087.50,1056.00
10/22/2024,1081.40,2692,1062.00,1088.50,1057.50
10/21/2024,1055.60,4028,1081.50,1096.00,1049.50
10/18/2024,1084.90,3634,1046.00,1090.00,1041.50
10/17/2024,1045.40,2923,1029.00,1050.00,1020.00
10/16/2024,1026.00,2655,1012.50,1032.00,1011.00
10/15/2024,1011.90,4313,1030.50,1034.50,1001.00
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
