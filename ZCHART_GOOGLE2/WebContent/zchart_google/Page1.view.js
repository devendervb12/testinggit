sap.ui.jsview("zchart_google.Page1", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf zchart_google.Page1
	*/ 
	getControllerName : function() {
		return "zchart_google.Page1";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf zchart_google.Page1
	*/ 
	createContent : function(oController) {
		  var content = [];
		  var html1 = new sap.ui.core.HTML("html1", {
		              content:
		                      "<div id=\'columnchart_material\' style=\'width: 800px; height: 500px;\'></div>",
		              preferDOM : false,                   
		              afterRendering : function(e) {
		              google.setOnLoadCallback( oController.drawChart() );
		              }
		      });
		  var oPanel = new sap.ui.commons.Panel();
		 // oPanel.setTitle(new sap.ui.core.Title({text: "Private Employee Network"}));
		  oPanel.addContent(html1);
		  content.push(html1);
		  return content;
		  }

});