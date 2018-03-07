//Test Feature layers

//Modules I Think
require([
  "esri/Map",
  "esri/views/MapView",
  "esri/layers/FeatureLayer",
  "dojo/domReady!"
],

//new function
function(Map, MapView, FeatureLayer){

  //create new map class
  var map = new Map ({
    basemap: "hybrid"
  });

  //create new Map view
  var view = new MapView({
    //Html ID.  Would class work?
    container: "viewDiv",
    map: map,

    extent: {//autocasts as new Extent(); try using this function
      xmin: 27208218,
      ymin: 5677436,
      xmax: 27043420,
      ymax: 5810437,
      spatialReference: 102100,
    }
  });

  var xmax = view.extent.xmax;
  var xmin = view.extent.xmin;
  var ymax = view.extent.ymax;
  var ymin = view.extent.ymin;
  var spRef = view.spatialReference; //Try this a few different ways

  view.on("click", function() {
    alert(`Extent: \n Xmax = ${xmax} \n Xmin = ${xmin} \n Ymax = ${ymax} \n Ymin ${ymin}`);
    console.log(spRef);
  });


  var featureLayer = new FeatureLayer ({
    url: "https://services8.arcgis.com/nwNGnvCfuuBjRuZt/arcgis/rest/services/outlet_points/FeatureServer"
  });

  map.add(featureLayer);

});
