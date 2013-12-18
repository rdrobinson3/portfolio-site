$(document).ready(function() {

         $('.carousel').carousel({
             interval: 5000
         })

         
		var yourStartLatLng = new google.maps.LatLng(59.3426606750, 18.0736160278);
		$('#map_canvas').gmap({'center': yourStartLatLng});

 });    

