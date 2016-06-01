
  var MyApp = React.createClass({
	render: function() {
	  var that = this,
		rows = [];

	  var countryDataSource = {
		 "chart": {
        "caption": "daily heart rate history",
        "subcaption": "Monday",
        "xaxisname": "time",
        "yaxisname": "heart beats per minute",
        "numberprefix": "bpm ",
		"theme": "twitter-dashboard",
    },
    "categories": [
        {
            "category": [
                {
                    "label": "00:00"
                },
                {
                    "label": "00:15"
                },
                {
                    "label": "00:30"
                },
                {
                    "label": "00:45"
                },
                {
                    "label": "01:00"
                },
                {
                    "label": "01:15"
                },
                {
                    "label": "01:30"
                },
                {
                    "label": "01:45"
                },
                {
                    "label": "02:00"
                },
                {
                    "label": "02:15"
                },
                {
                    "label": "02:30"
                },
                {
                    "label": "02:45"
                },
				{
                    "label": "03:00"
                },
                {
                    "label": "03:15"
                },
                {
                    "label": "03:30"
                },
                {
                    "label": "03:45"
                },
                {
                    "label": "04:00"
                },
                {
                    "label": "04:15"
                },
                {
                    "label": "04:30"
                },
                {
                    "label": "04:45"
                },
                {
                    "label": "05:00"
                },
                {
                    "label": "05:15"
                },
                {
                    "label": "05:30"
                },
                {
                    "label": "05:45"
                },
				{
                    "label": "06:00"
                },
                {
                    "label": "06:15"
                },
                {
                    "label": "06:30"
                },
                {
                    "label": "06:45"
                },
                {
                    "label": "07:00"
                },
                {
                    "label": "07:15"
                },
                {
                    "label": "07:30"
                },
                {
                    "label": "07:45"
                },
                {
                    "label": "08:00"
                },
                {
                    "label": "08:15"
                },
                {
                    "label": "08:30"
                },
                {
                    "label": "08:45"
                },
				{
                    "label": "09:00"
                },
                {
                    "label": "09:15"
                },
                {
                    "label": "09:30"
                },
                {
                    "label": "09:45"
                },
                {
                    "label": "10:00"
                },
                {
                    "label": "10:15"
                },
                {
                    "label": "10:30"
                },
                {
                    "label": "10:45"
                },
                {
                    "label": "11:00"
                },
                {
                    "label": "11:15"
                },
                {
                    "label": "11:30"
                },
                {
                    "label": "11:45"
                },
				{
                    "label": "12:00"
                },
                {
                    "label": "12:15"
                },
                {
                    "label": "12:30"
                },
                {
                    "label": "12:45"
                },
                {
                    "label": "13:00"
                },
                {
                    "label": "13:15"
                },
                {
                    "label": "13:30"
                },
                {
                    "label": "13:45"
                },
                {
                    "label": "14:00"
                },
                {
                    "label": "14:15"
                },
                {
                    "label": "14:30"
                },
                {
                    "label": "14:45"
                },
				{
                    "label": "15:00"
                },
                {
                    "label": "15:15"
                },
                {
                    "label": "15:30"
                },
                {
                    "label": "15:45"
                },
                {
                    "label": "16:00"
                },
                {
                    "label": "16:15"
                },
                {
                    "label": "16:30"
                },
                {
                    "label": "16:45"
                },
                {
                    "label": "17:00"
                },
                {
                    "label": "17:15"
                },
                {
                    "label": "17:30"
                },
                {
                    "label": "17:45"
                },
				{
                    "label": "18:00"
                },
                {
                    "label": "18:15"
                },
                {
                    "label": "18:30"
                },
                {
                    "label": "18:45"
                },
                {
                    "label": "19:00"
                },
                {
                    "label": "19:15"
                },
                {
                    "label": "19:30"
                },
                {
                    "label": "19:45"
                },
                {
                    "label": "20:00"
                },
                {
                    "label": "20:15"
                },
                {
                    "label": "20:30"
                },
                {
                    "label": "20:45"
                },
				{
                    "label": "21:00"
                },
                {
                    "label": "21:15"
                },
                {
                    "label": "21:30"
                },
                {
                    "label": "21:45"
                },
                {
                    "label": "22:00"
                },
                {
                    "label": "22:15"
                },
                {
                    "label": "22:30"
                },
                {
                    "label": "22:45"
                },
                {
                    "label": "23:00"
                },
                {
                    "label": "23:15"
                },
                {
                    "label": "23:30"
                },
                {
                    "label": "23:45"
                }
            ]
        }
    ],
    "dataset": [
        {
            "seriesname": "1/4h mean",
            "data": [
                {
                    "value": "50"
                },
                {
                    "value": "52"
                },
                {
                    "value": "48"
                },
                {
                    "value": "46"
                },
                {
                    "value": "49"
                },
                {
                    "value": "50"
                },
                {
                    "value": "48"
                },
                {
                    "value": "50"
                },
                {
                    "value": "52"
                },
                {
                    "value": "53"
                },
                {
                    "value": "52"
                },
                {
                    "value": "50"
                },
				{
                    "value": "50"
                },
                {
                    "value": "52"
                },
                {
                    "value": "48"
                },
                {
                    "value": "46"
                },
                {
                    "value": "49"
                },
                {
                    "value": "50"
                },
                {
                    "value": "48"
                },
                {
                    "value": "50"
                },
                {
                    "value": "52"
                },
                {
                    "value": "53"
                },
                {
                    "value": "52"
                },
                {
                    "value": "50"
                },
				{
                    "value": "50"
                },
                {
                    "value": "52"
                },
                {
                    "value": "48"
                },
                {
                    "value": "46"
                },
                {
                    "value": "49"
                },
                {
                    "value": "50"
                },
                {
                    "value": "48"
                },
                {
                    "value": "50"
                },
                {
                    "value": "52"
                },
                {
                    "value": "53"
                },
                {
                    "value": "52"
                },
                {
                    "value": "50"
                },
				{
                    "value": "50"
                },
                {
                    "value": "52"
                },
                {
                    "value": "48"
                },
                {
                    "value": "46"
                },
                {
                    "value": "49"
                },
                {
                    "value": "50"
                },
                {
                    "value": "48"
                },
                {
                    "value": "50"
                },
                {
                    "value": "52"
                },
                {
                    "value": "53"
                },
                {
                    "value": "52"
                },
                {
                    "value": "50"
                },
				{
                    "value": "50"
                },
                {
                    "value": "52"
                },
                {
                    "value": "48"
                },
                {
                    "value": "46"
                },
                {
                    "value": "49"
                },
                {
                    "value": "50"
                },
                {
                    "value": "48"
                },
                {
                    "value": "50"
                },
                {
                    "value": "60"
                },
                {
                    "value": "65"
                },
                {
                    "value": "60"
                },
                {
                    "value": "65"
                },
				{
                    "value": "70"
                },
                {
                    "value": "75"
                },
                {
                    "value": "80"
                },
                {
                    "value": "90"
                },
                {
                    "value": "100"
                },
                {
                    "value": "101"
                },
                {
                    "value": "105"
                },
                {
                    "value": "80"
                },
                {
                    "value": "60"
                },
                {
                    "value": "65"
                },
                {
                    "value": "52"
                },
                {
                    "value": "50"
                },
				{
                    "value": "50"
                },
                {
                    "value": "52"
                },
                {
                    "value": "48"
                },
                {
                    "value": "46"
                },
                {
                    "value": "49"
                },
                {
                    "value": "60"
                },
                {
                    "value": "65"
                },
                {
                    "value": "70"
                },
                {
                    "value": "80"
                },
                {
                    "value": "70"
                },
                {
                    "value": "75"
                },
                {
                    "value": "60"
                },
				{
                    "value": "50"
                },
                {
                    "value": "52"
                },
                {
                    "value": "48"
                },
                {
                    "value": "46"
                },
                {
                    "value": "49"
                },
                {
                    "value": "50"
                },
                {
                    "value": "48"
                },
                {
                    "value": "50"
                },
                {
                    "value": "52"
                },
                {
                    "value": "53"
                },
                {
                    "value": "52"
                },
                {
                    "value": "50"
                }
            ]
        },
        {
            "seriesname": "1/4h max bpm",
            "renderas": "line",
            "showvalues": "0",
            "data": [
                {
                    "value": "60"
                },
                {
                    "value": "55"
                },
                {
                    "value": "53"
                },
                {
                    "value": "65"
                },
                {
                    "value": "60"
                },
                {
                    "value": "54"
                },
                {
                    "value": "53"
                },
                {
                    "value": "58"
                },
                {
                    "value": "59"
                },
                {
                    "value": "65"
                },
                {
                    "value": "60"
                },
                {
                    "value": "56"
                },
				{
                    "value": "60"
                },
                {
                    "value": "55"
                },
                {
                    "value": "53"
                },
                {
                    "value": "65"
                },
                {
                    "value": "60"
                },
                {
                    "value": "54"
                },
                {
                    "value": "53"
                },
                {
                    "value": "58"
                },
                {
                    "value": "59"
                },
                {
                    "value": "65"
                },
                {
                    "value": "60"
                },
                {
                    "value": "56"
                },
				{
                    "value": "60"
                },
                {
                    "value": "55"
                },
                {
                    "value": "53"
                },
                {
                    "value": "65"
                },
                {
                    "value": "60"
                },
                {
                    "value": "54"
                },
                {
                    "value": "53"
                },
                {
                    "value": "58"
                },
                {
                    "value": "59"
                },
                {
                    "value": "65"
                },
                {
                    "value": "60"
                },
                {
                    "value": "56"
                },
				{
                    "value": "60"
                },
                {
                    "value": "55"
                },
                {
                    "value": "53"
                },
                {
                    "value": "65"
                },
                {
                    "value": "60"
                },
                {
                    "value": "54"
                },
                {
                    "value": "53"
                },
                {
                    "value": "58"
                },
                {
                    "value": "59"
                },
                {
                    "value": "65"
                },
                {
                    "value": "60"
                },
                {
                    "value": "56"
                },
				{
                    "value": "60"
                },
                {
                    "value": "55"
                },
                {
                    "value": "53"
                },
                {
                    "value": "65"
                },
                {
                    "value": "60"
                },
                {
                    "value": "54"
                },
                {
                    "value": "53"
                },
                {
                    "value": "58"
                },
                {
                    "value": "59"
                },
                {
                    "value": "65"
                },
                {
                    "value": "60"
                },
                {
                    "value": "56"
                },
				{
                    "value": "60"
                },
                {
                    "value": "55"
                },
                {
                    "value": "53"
                },
                {
                    "value": "65"
                },
                {
                    "value": "60"
                },
                {
                    "value": "54"
                },
                {
                    "value": "53"
                },
                {
                    "value": "58"
                },
                {
                    "value": "59"
                },
                {
                    "value": "65"
                },
                {
                    "value": "60"
                },
                {
                    "value": "56"
                },
				{
                    "value": "60"
                },
                {
                    "value": "55"
                },
                {
                    "value": "53"
                },
                {
                    "value": "65"
                },
                {
                    "value": "60"
                },
                {
                    "value": "54"
                },
                {
                    "value": "53"
                },
                {
                    "value": "58"
                },
                {
                    "value": "59"
                },
                {
                    "value": "65"
                },
                {
                    "value": "60"
                },
                {
                    "value": "56"
                },
				{
                    "value": "60"
                },
                {
                    "value": "55"
                },
                {
                    "value": "53"
                },
                {
                    "value": "65"
                },
                {
                    "value": "60"
                },
                {
                    "value": "54"
                },
                {
                    "value": "53"
                },
                {
                    "value": "58"
                },
                {
                    "value": "59"
                },
                {
                    "value": "65"
                },
                {
                    "value": "60"
                },
                {
                    "value": "56"
                }
            ]
        }
    ]
	  };

	  var countryChartConfigs = {
		type: "mscombi2d",
		renderAt: "country-revenue",
		width: '100%',
		height: 400,
		dataFormat: "json",
		dataSource: countryDataSource
	  };

	  var monthlyDataSource = {
		chart: {
		  // caption options
		  "caption": "stress zone indicator",
		  "xAxisName": "time",
		  "yAxisName": "stess level",
		  "theme": "twitter-dashboard"
		},
		data: [{
		  "label": "Jan",
		  "value": "657000"
		}, {
		  "label": "Feb",
		  "value": "138000"
		}, {
		  "label": "Mar",
		  "value": "192000"
		}, {
		  "label": "Apr",
		  "value": "111000"
		}, {
		  "label": "May",
		  "value": "438000"
		}, {
		  "label": "Jun",
		  "value": "292000"
		}, {
		  "label": "Jul",
		  "value": "365000"
		}, {
		  "label": "Aug",
		  "value": "649000"
		}, {
		  "label": "Sep",
		  "value": "746000"
		}, {
		  "label": "Oct",
		  "value": "803000"
		}, {
		  "label": "Nov",
		  "value": "876000"
		}, {
		  "label": "Dec",
		  "value": "730000"
		}]
	  };

	  var monthlyChartConfigs = {
		type: "spline",
		renderAt: "monthly-revenue",
		width: '100%',
		height: 350,
		dataFormat: "json",
		dataSource: monthlyDataSource
	  };

	  var productDataSource = {
		chart: {
		  // caption options
		  "caption": "heart beat levels",
		  "theme": "twitter-dashboard"
		},
		data: [{
		  "label": "recover",
		  "value": "1460000"
		}, {
		  "label": "normal",
		  "value": "2190000"
		}, {
		  "label": "stress",
		  "value": "1095000"
		}, {
		  "label": "sport",
		  "value": "1095000"
		}, {
		  "label": "sleep",
		  "value": "1460000"
		}]
	  };

	  var productChartConfigs = {
		type: "doughnut2d",
		renderAt: "product-revenue",
		width: '100%',
		height: 350,
		dataFormat: "json",
		dataSource: productDataSource
	  };

	  return (
		<div>
		  <div id="interactive-dashbaord"></div>
		  <div className="chart-row">
			<div id="country-revenue">
			  <react_fc.FusionCharts {...countryChartConfigs} />
			</div>
		  </div>
		  <div className="chart-row">
			<div id="monthly-revenue" className="inline-chart">
			  <react_fc.FusionCharts {...monthlyChartConfigs} />
			</div>
			<div id="product-revenue" className="inline-chart">
			  <react_fc.FusionCharts {...productChartConfigs} />
			</div>
		  </div>
		</div>
	  );
	}
  });

  React.render(
	<MyApp />,
	document.getElementById("dashboard")
  );
