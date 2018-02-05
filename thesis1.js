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

var blueprint_text_index = 1;
blueprintTextSlideShow(blueprint_text_index);

function plusSlides(n) {
  blueprintTextSlideShow(blueprint_text_index);
}

function showSlides(n) {
  blueprintTextSlideShow(bluePrint_text_index)
}

function blueprintTextSlideShow(n){
  var i;
  var slides = document.getElementsByClassName('blueprint_text_slides');
  var dots = document.getElementsByClassName("dot");
  if(n > slides.length) {blueprint_text_index = 1}
  if(n < 1) {slideIndex = slides.lenth}
  for(i=0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i=0; i<dots.length; i++){
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[blueprint_text_index].style.display = "block";
  dots[blueprint_text_index].classname += " active";
}

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
