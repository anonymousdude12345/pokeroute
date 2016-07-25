var poke = {

	map: null,

	// mathsed 12km/h to 3.3333, 3 cos its nicer.
	// suck it.

	metresPerSecond: 3.3,

	markers: [],
	poly: [],

	go: function(){

		this.textBox = document.getElementById('textbox');
		this.map = new google.maps.Map(document.getElementById('map'), {
		 center: {lat: 52.531683, lng: -1.5093822},
		 zoom: 18
	   	});

		this.map.addListener('click', function(e){

			var t;

			var m = new google.maps.Marker({
				position: e.latLng,
				map: this.map,
				draggable: true
			});

			this.markers.push(m);
			this.poly.push(e.latLng);

			var str = '<?xml version="1.0" encoding="UTF-8" standalone="no"?><gpx xmlns="http://www.topografix.com/GPX/1/1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd" version="1.1" creator="herpderp.com">';

			this.poly.forEach(function(el, i){
				if (this.poly.length > 1){
					if (typeof this.poly[i+1] !== 'undefined'){

						if (i === 0){
							t = new Date();


							str += '<wpt lat="' + this.poly[i].lat() + '" lon="'+ this.poly[i].lng() +'">';
							str += '<time>' + t.toISOString().split('.')[0] + 'Z</time>';
							str += '</wpt>';

						}

						t.setSeconds(t.getSeconds() + Math.ceil(google.maps.geometry.spherical.computeDistanceBetween (this.poly[i], this.poly[i+1]) / this.metresPerSecond));

						str += '<wpt lat="' + this.poly[i+1].lat() + '" lon="'+ this.poly[i+1].lng() +'">';
						str += '<time>' + t.toISOString().split('.')[0] + 'Z</time>';
						str += '</wpt>';



						/*

						<wpt lat="52.531262" lon="-1.507310">
						    <time>2016-07-20T10:48:00Z</time>
						</wpt>

						*/
						// console.log(this.poly[i].lat(), );


						// console.log();


					}
				}

			}.bind(this));

			str += '</gpx>';
			
			this.textBox.value = str;

			// console.log(polyline);

			var flightPath = new google.maps.Polyline({
	          path: this.poly,
	          geodesic: true,
	          strokeColor: '#FF0000',
	          strokeOpacity: 1.0,
	          strokeWeight: 2
	        });

			flightPath.setMap(this.map);


		}.bind(this));


	}
};
