$(document).ready(function(){
      $('.top-slider').slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear'
    });
     /*scroll to category*/
    $("nav ul").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 500);
	});
    $(".mobile-menu").click(function(){
           $("ul.nav").toggleClass("active");
            $(".mobile-menu").toggleClass("active");
        });
});
function initMap() {
        var myLatLng = {lat: 50.00, lng: 36.15};
        // Styles a map in night mode.
        var map = new google.maps.Map(document.getElementById('dark-map'), {
          center: myLatLng,
          zoom: 8,
          zoomControl: false,
          scaleControl: false,
          scrollwheel: false,
          styles: [
            {elementType: 'geometry', stylers: [{color: '#353535'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#fff'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#575757'}]
            },
            {
              featureType: 'administrative.locality',
              elementType: 'geometry.stroke',
              stylers: [{color: '#575757'}]
            },
              
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#575757'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#256267'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#282828'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#353535'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#575757'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#575757'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#2b2b2b'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ]
        });
     var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: 'Hello World!'
        });
      }