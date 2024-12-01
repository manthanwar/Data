const data = {};

data.title = `<a href="https://www.highcharts.com/demo/highcharts/bubble" target="_blank">Daily Sugar and fat intake per country</a> & <a href="https://www.everviz.com/chart-examples/bubble-and-scatter-plot-charts/sugar-and-fat-intake-per-country-bubble-chart/" target="_blank">also see</a>`;

data.notes = 'Daily Sugar and fat intake per country';

data.csv = `Fat	,	Sugar	,	Obesity	,	Alpha2	,	Country
63.4	,	 51.8	,	15.40	,	PT	,	Portugal
64.0	,	 82.9	,	31.30	,	NZ	,	New Zealand
65.4	,	 50.8	,	28.50	,	HU	,	Hungary
65.5	,	126.4	,	35.30	,	US	,	United States
68.6	,	 20.0	,	16.00	,	RU	,	Russia
69.2	,	 57.6	,	10.40	,	IT	,	Italy
71.0	,	 93.2	,	24.70	,	UK	,	United Kingdom
73.5	,	 83.1	,	10.00	,	NO	,	Norway
74.2	,	 68.5	,	14.50	,	FR	,	France
78.4	,	 70.1	,	16.60	,	ES	,	Spain
80.3	,	 86.1	,	11.80	,	SE	,	Sweden
80.4	,	102.5	,	12.00	,	NL	,	Netherlands
80.8	,	 91.5	,	15.80	,	FI	,	Finland
86.5	,	102.9	,	14.70	,	DE	,	Germany
95.0	,	 95.0	,	13.80	,	BE	,	Belgium
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
 }
};

export default data;
