YMaps.jQuery(function () {
			
	var map = new YMaps.Map(YMaps.jQuery("#YMapsID")[0]);
            
	map.setCenter(new YMaps.GeoPoint(26.805747,55.122690), 14);
			
	var s = new YMaps.Style();

	s.iconStyle = new YMaps.IconStyle();
	s.iconStyle.href = "img/point-logo.png";
	s.iconStyle.size = new YMaps.Point(231, 190);
	s.iconStyle.offset = new YMaps.Point(-65, -155);

	var placemark = new YMaps.Placemark(new YMaps.GeoPoint(26.834929,55.121559), {style: s, hideIcon: false});

	map.addOverlay(placemark); 
});