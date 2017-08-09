var chart = null;
var me = null;
var data = null;

sap.ui.controller("zchart_google.Page1", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf zchart_google.Page1
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf zchart_google.Page1
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf zchart_google.Page1
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf zchart_google.Page1
*/
//	onExit: function() {
//
//	}
	 drawChart: function() {
		 
		 var data = google.visualization.arrayToDataTable([
	          ['Year', 'Pendings', 'Payments'],
	          ['2014', 1000, 400],
	          ['2015', 1170, 460],
	          ['2016', 660, 1120],
	          ['2017', 1030, 540]
	        ]);

	        var options = {
	          chart: {
	            title: 'Private Employee Network',
	            subtitle: 'Payments and Pending: 2014-2017',
	          }
	        };

	        var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

	        chart.draw(data, google.charts.Bar.convertOptions(options));
		  },
});