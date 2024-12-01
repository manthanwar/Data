const data = {};

data.title = 'British Pound US Dollar (GBPUSD) Historical';
data.subtitle = '';
data.notes = '';
data.source =
 '<a href="https://www.nasdaq.com/market-activity/currencies/gbpusd/historical" target="_blank">Nasdaq</a>';

data.csv = `Date,Close/Last,Volume,Open,High,Low
11/08/2024,1.2923,N/A,1.2986,1.299,1.2884
11/07/2024,1.2965,N/A,1.2986,1.299,1.2961
11/06/2024,1.2921,N/A,1.2878,1.2926,1.2875
11/05/2024,1.2908,N/A,1.3041,1.3049,1.2864
11/04/2024,1.2957,N/A,1.2957,1.2962,1.2948
11/03/2024,1.299,N/A,1.2926,1.2999,1.2951
11/01/2024,1.2923,N/A,1.2898,1.2981,1.2885
10/31/2024,1.29,N/A,1.2898,1.2903,1.2888
10/30/2024,1.295,N/A,1.2962,1.2968,1.2944
10/29/2024,1.2999,N/A,1.3015,1.302,1.2996
10/28/2024,1.2961,N/A,1.2971,1.2981,1.2959
10/27/2024,1.2946,N/A,1.2959,1.2972,1.2945
10/25/2024,1.2962,N/A,1.2972,1.2999,1.2956
10/24/2024,1.2963,N/A,1.2972,1.2977,1.2961
10/23/2024,1.2927,N/A,1.2927,1.2929,1.2909
10/22/2024,1.2977,N/A,1.2977,1.299,1.2969
10/21/2024,1.2995,N/A,1.2984,1.2996,1.298
10/20/2024,1.3049,N/A,1.3048,1.3058,1.3042
10/18/2024,1.3051,N/A,1.301,1.3072,1.3005
10/17/2024,1.302,N/A,1.301,1.3026,1.3005
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
