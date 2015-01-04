
var pathObj = {
    "bridge": {
        "strokepath": [
            {
                "path": "M2.5,40.1c0-20.7,16.8-37.6,37.6-37.6  s37.6,16.8,37.6,37.6",
                "duration": 400
            },
            {
                "path": "M77.6,40.1c0-20.7,16.8-37.6,37.6-37.6  s37.6,16.8,37.6,37.6",
                "duration": 400
            },
            {
                "path": "M152.7,40.1c0-20.7,16.8-37.6,37.6-37.6  s37.6,16.8,37.6,37.6",
                "duration": 400
            },
            {
                "path": "M227.9,40.1c0-20.7,16.8-37.6,37.6-37.6  S303,19.3,303,40.1",
                "duration": 400
            },
            {
                "path": "M 2.5 2.5 L 303 2.5",
                "duration": 600
            }
        ],
        "dimensions": {
            "width": 306,
            "height": 41
        }
    }
}; 
 
 
/* 
 Setup and Paint your lazyline! 
 */ 
 
$(document).ready(function(){ 
	$('#bridge').lazylinepainter({
		"svgData": pathObj,
		"strokeWidth": 5,
		"strokeCap": 'square',
		"strokeColor": "#ffffff",
		"responsive": true,
		'onComplete' : function(){
			$('.intrologo h1, .intrologo h2').css({'opacity':1});
		},
	}).lazylinepainter('paint'); 
});