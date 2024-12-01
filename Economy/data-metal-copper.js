const data = {};

data.title = 'Copper (HG:CMX) Historical Data';
data.subtitle = 'USD per troy ounce';
data.notes = '';
data.source =
 '<a href="https://www.nasdaq.com/market-activity/commodities/hg-cmx/historical" target="_blank">Nasdaq</a>';

data.csv = `Date,Close/Last,Volume,Open,High,Low
11/08/2024,4.306,76566,4.439,4.439,4.2925
11/07/2024,4.4315,90082,4.239,4.4465,4.236
11/06/2024,4.246,114730,4.467,4.467,4.226
11/05/2024,4.475,60089,4.432,4.493,4.4205
11/04/2024,4.4315,60858,4.355,4.4485,4.347
11/01/2024,4.3715,53517,4.3615,4.41,4.343
10/31/2024,4.34,46574,4.358,4.38,4.326
10/30/2024,4.3515,44053,4.365,4.3835,4.3245
10/29/2024,4.3605,68232,4.368,4.43,4.3305
10/28/2024,4.3625,40381,4.3695,4.3845,4.333
10/25/2024,4.3705,42625,4.364,4.389,4.325
10/24/2024,4.3515,50672,4.3335,4.3995,4.3225
10/23/2024,4.3365,48870,4.3875,4.396,4.31
10/22/2024,4.3805,40304,4.359,4.407,4.343
10/21/2024,4.3595,52082,4.3895,4.457,4.3475
10/18/2024,4.3845,45831,4.3335,4.413,4.326
10/17/2024,4.325,56601,4.3705,4.4135,4.2915
10/16/2024,4.3675,43436,4.3415,4.395,4.3295
10/15/2024,4.3375,57272,4.4035,4.4115,4.3295
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
