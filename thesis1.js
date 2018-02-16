var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if(slideIndex>x.length){slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 4000);
}

var textIndex = 0;
textSlideShow();

function textSlideShow(){
  var i;
  var x = document.getElementsByClassName("text_slides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  textIndex++;
  if(textIndex>x.length){textIndex=1}
  x[textIndex-1].style.display = "block";
  setTimeout(textSlideShow, 4000);
}


function myMove() {
  var elem = document.getElementById("blueprint_logo");
  var posHorizontal = 350;
  var posVertical = 0;
  var id = setInterval(frame, 5);
  function frame() {
    if(posVertical == 350 && posHorizontal == 0) {
      clearInterval(id);
    } else {
      posHorizontal--;
      posVertical++;
      elem.style.top = posVertical + 'px';
      elem.style.left = posHorizontal + 'px';
    }
  }
};

var slideIndex2 = 1;
var back = false;

const nextSlide = function (n, back){
  var index = slideIndex2 += n
  slideShow(index, back);
};


const slideShow = function (n, back) {
//First Slide
  if (n===1) {
    if(back==false){}
    else {
      fade_mech("second_slide", "first_slide");
    }
  }
//Second Slide
  else if (n===2) {
    if(back==false){
      fade_mech("first_slide", "second_slide");
    }
    else if(back==true){
      fade_mech("third_slide", "second_slide");
    }
  }
//Third Slide
  else if (n===3) {
    if(back==false){
      fade_mech("second_slide", "third_slide");
    }
    else if(back==true){
      fade_mech("fourth_slide", "third_slide");
    }
  }
//Fourth Slide
  else if (n===4) {
    if(back==false){
      fade_mech("third_slide", "fourth_slide");
    }
    else if(back==true){
      fade_mech("fifth_slide", "fourth_slide");
      move_blueprint(34, 13, true);
    }
  }
//Fifth Slide
  else if (n===5) {
    if(back==false){
      fade_mech("fourth_slide", "fifth_slide");
      move_blueprint(13, 34, false);
    }
    else if(back==true){
      fade_mech("sixth_slide", "fifth_slide");
    }
  }
//Sixth Slide
  else if (n===6){
    if(back==false){
      fade_mech("fifth_slide", "sixth_slide");
      move_blueprint(34, 13, true);
    }
    else if(back==true){}
  }

  else {
    console.log("stop")
  }

};

function fade_mech (out_element, in_element) {
  var fade_out_element = document.getElementsByClassName(out_element)[0];
  var fade_in_element = document.getElementsByClassName(in_element)[0];
  var opacity_att_out = 1.00;
  var opacity_att_in = 0.00;
  var start_fade_in = false;
  fade_out_element.style.opacity = "1";

  var fade_out = setInterval(frameFadeOut, 5);
    function frameFadeOut() {
      if((opacity_att_out).toFixed(2) == 0.00){
        fade_out_element.style.display = "none";
        fade_in_element.style.opacity = "0";
        fade_in_element.style.display = "block";
        if((opacity_att_in).toFixed(2) == 1.00){
          fade_in_element.style.opacity = "1";
          clearInterval(fade_out);
        } else {
          opacity_att_in +=0.01;
          fade_in_element.style.opacity = opacity_att_in;
        }

      } else {
        opacity_att_out -= 0.01;
        fade_out_element.style.opacity = opacity_att_out;
      }
  }
}

function move_blueprint(from_location, to_location, backwards){
  var blueprint = document.getElementById("blueprint_logo");
  var move_location = from_location;
  var id = setInterval(frame, 25);
  function frame(){
    if(move_location == to_location){
      clearInterval(id);
    } else {
      if(backwards==false){
        move_location ++;
      } else {
        move_location --; }
      blueprint.style.right = move_location + '%';
    }
  }
}

var blueprint_text_index = 0;
blueprintTextSlideShow(blueprint_text_index);

function plusSlides(n) {
  blueprint_text_index += n;
  blueprintTextSlideShow(blueprint_text_index);
}

function showSlides(n) {
  blueprintTextSlideShow(bluePrint_text_index)
}

function blueprintTextSlideShow(n){
  var i;
  var slides = document.getElementsByClassName('blueprint_text_slides');
  // var dots = document.getElementsByClassName("dot");
  if(blueprint_text_index > slides.length) {blueprint_text_index = slides.length};
  if(blueprint_text_index < 0) {blueprint_text_index = 0};
  for(i=0; i < slides.length; i++) {
    slides[i].style.display = "none";
  };
  // for (i=0; i<dots.length; i++){
  //   dots[i].className = dots[i].className.replace(" active", "");

// };
  slides[blueprint_text_index].style.display = "block";
  // dots[blueprint_text_index].classname += " active";
};

var scrollLeft = document.documentElement.scrollLeft;
var scrollTop = document.documentElement.scrollTop;
var scrollBack = 0;


var tocHighlight = function(from, to, elementID, color, color2){
  if(scrollTop >= from && scrollTop < to){
    document.getElementById(elementID).style.backgroundColor = color;
    document.getElementById(elementID).style.border = "solid " + color2 + " 1px";
    document.getElementById(elementID).style.color = "white";

  } else {
    document.getElementById(elementID).style.color = "black"
    document.getElementById(elementID).style.backgroundColor = "transparent";
    document.getElementById(elementID).style.border = "none";
  }
};


var scrollHighlight = function () {
  scrollTop = document.documentElement.scrollTop;
  console.log(scrollTop);
  highLightedTextColor = "rgba(85, 32, 0, .6)";
  highLightedBorderColor = "rgba(85,32,0,1)"

  tocHighlight(0, 600, "abstract_toc", highLightedTextColor, highLightedBorderColor);
  tocHighlight(600, 2400, "litReview_toc", highLightedTextColor, highLightedBorderColor);
  tocHighlight(2400, 3100, "studyArea_toc", highLightedTextColor, highLightedBorderColor);
  // tocHighlight(2400, 3100, "bluePrint_toc", "rgba(0, 225, 255, .5)")
  tocHighlight(3100, 3800, "theoryHyp_toc", highLightedTextColor, highLightedBorderColor);
  tocHighlight(3800, 8180, "data_toc", highLightedTextColor, highLightedBorderColor);
  tocHighlight(8180, 10900, "method_toc", highLightedTextColor, highLightedBorderColor);
  tocHighlight(10900, 12725, "results_toc", highLightedTextColor, highLightedBorderColor);
  tocHighlight(12725, 15000, "summary_toc", highLightedTextColor, highLightedBorderColor);

};


var headerCollapse = function () {
  scrollTop = document.documentElement.scrollTop;
  var header = document.getElementsByClassName("header");
  console.log(header[0].style.fontSize);
  if (scrollTop > 1 && scrollTop <= 80) {
    var deltaHeight= ((scrollTop/5) - 20)*-1;
    deltaHeight = deltaHeight.toString()+"%";
    header[0].style.height = deltaHeight;
    header[0].style.fontSize = "60%";
  } else if (scrollTop < 1){
    header[0].style.fontSize = "100%";
    header[0].style.height = "20%";
    deltaHeight= ((scrollTop/5) - 20)*-1;
  } else if (scrollTop > 80) {
    header[0].style.height = "7%";
    header[0].style.fontSize = "60%";
  }
}


var changeBackgroundInfo = function(from, to, back_class, n) {

  if (scrollTop >= from && scrollTop < to){
    document.getElementsByClassName(back_class)[n].style.display = "block";
  } else {
    document.getElementsByClassName(back_class)[n].style.display = "none";
  }

};

var changebackgroundInfoScroll = function() {
  scrollTop = document.documentElement.scrollTop;
  changeBackgroundInfo(0, 600, "back_info", 0);
  changeBackgroundInfo(600, 2400, "back_info", 1);
  changeBackgroundInfo(2400, 3100, "back_info", 2);
  changeBackgroundInfo(3100, 3800, "back_info", 3);
  changeBackgroundInfo(3800, 8180, "back_info", 4);
  changeBackgroundInfo(8180, 10900, "back_info", 5);
};


window.addEventListener('scroll', scrollHighlight);
window.addEventListener('scroll', headerCollapse);
window.addEventListener('scroll', changebackgroundInfoScroll);






//Figure1 Map
//TODO Create a legend


// require([
//   "esri/Map",
//   "esri/views/MapView",
//   "esri/layer/FeatureLayer",
//   "dojo/domReady!"
// ],
//
// function(Map, MapView, FeatureLayer){
//   var map = new Map ({
//     basemap: "hybrid"
//   });
//
//   var view = new MapView({
//     container: "Figure1",
//     map:map,
//
//     extent: {
//       //TODO Add Extent Coordinates
//       xmin: 0,
//       ymin: 0,
//       xmax: 0,
//       ymax: 0,
//       spatialReference: 102100,
//     }
//   });
//
//   var parcelLayer = new FeatureLayer ({
//     url: "" //TODO upload parcel layer to dev site
//   });
//
//   var citiesLayer = new FeatureLayer ({
//     url: "" //TODO upload cities layer to dev site
//   });
//
//   var countiesLayer = new FeatureLayer ({
//     url: "" //TODO upload counties layer
//   });
//
//
// map.add(parcelLayer);
// map.add(citiesLayer);
// map.add(countiesLayer);
//
//
// });
//
// //Figure2 Map
// //TODO Create a legend
// //TODO Figure out label; my guess is that its done on the dev site
// require([
//   "esri/Map",
//   "esri/views/MapView",
//   "esri/layer/FeatureLayer",
//   "dojo/domReady!"
// ],
//
// function(Map, MapView, FeatureLayer){
//   var map = new Map ({
//     basemap: "hybrid"
//   });
//
//   var view = new MapView({
//     container: "Figure2",
//     map:map,
//
//     extent: {
//       //TODO Add Extent Coordinates
//       xmin: 0,
//       ymin: 0,
//       xmax: 0,
//       ymax: 0,
//       spatialReference: 102100,
//     }
//   });
//
//   var parcelLayer = new FeatureLayer ({
//     url: "" //TODO upload parcel layer to dev site
//   });
//
//   var countiesLayer = new FeatureLayer ({
//     url: "" //TODO upload counties layer to dev site
//   });
//
//   var rddLayer = new FeatureLayer ({
//     url: "" //TODO upload rdd layer to dev site
//   });
//
//   var cityImpactAreas = new FeatureLayer ({
//     url: "" //TODO uplaod city impact areas  to dev site
//   });
//
//
// map.add(parcelLayer);
// map.add(citiesLayer);
// map.add(rddLayer);
// map.add(cityImpactAreas);
//
//
// });
