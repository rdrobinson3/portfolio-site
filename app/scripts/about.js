'use strict';
$(document).ready(function () {

    $('#map_canvas').gmap({'zoom':7, 'center':'34.176376,-82.023768', 'scrollwheel': false}).bind('init', function() {
        $('#map_canvas').gmap('addMarker', {'position':'34.176376,-82.023768', 'bounds':false}).click(function() {
            $('#map_canvas').gmap('openInfoWindow', {'content': 'Ninety Six'}, this);
        });
    });

});