const data = {};

data.title = 'RBOB Gasoline (RB:NMX) Historical Data';
data.subtitle = 'USD per gallon';
data.notes = 'RBOB: Reformulated Gasoline Blendstock for Oxygenate Blending';
data.source =
 '<a href="https://www.nasdaq.com/market-activity/commodities/rb-nmx/historical" target="_blank">Nasdaq</a>';

data.csv = `Date,Close/Last,Volume,Open,High,Low
11/08/2024,2.0125,50819,2.0499,2.051,1.9985
11/07/2024,2.0536,53022,2.0397,2.0618,2.0117
11/06/2024,2.0354,55816,2.0418,2.0577,1.981
11/05/2024,2.0446,47288,2.0291,2.0606,2.0174
11/04/2024,2.0192,51352,1.9815,2.0329,1.9813
11/01/2024,1.9665,53787,2.001,2.0244,1.9633
10/31/2024,1.9738,44005,1.9669,2.0088,1.9522
10/30/2024,1.959,56277,1.9219,1.9744,1.9214
10/29/2024,1.9179,53696,1.9373,1.9532,1.9011
10/28/2024,1.9257,61557,2.006,2.006,1.9202
10/25/2024,2.037,57173,1.9948,2.0425,1.9858
10/24/2024,1.9923,47640,2.01,2.0385,1.9783
10/23/2024,2.0041,42502,2.0301,2.0389,1.9927
10/22/2024,2.0365,44988,1.9702,2.0403,1.9633
10/21/2024,1.9831,46552,1.9853,2.007,1.9612
10/18/2024,1.9661,52976,2.008,2.0193,1.9512
10/17/2024,2.0103,52298,2.0159,2.025,1.9728
10/16/2024,2.0064,47628,2.011,2.0215,1.9857
10/15/2024,2.0074,48305,2.0288,2.0423,1.9792
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
