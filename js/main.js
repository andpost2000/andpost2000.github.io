var pageHeader = document.querySelector(".page-header");
var toggleMenu = document.querySelector(".nav-list__toggle");

pageHeader.classList.remove("page-header--show-menu");

toggleMenu.addEventListener("click", function() {
  pageHeader.classList.toggle("page-header--show-menu");
});

var mapContainer = document.querySelector('#map');

if (mapContainer) {
  ymaps.ready(init);

  function init() {
    var myMap = new ymaps.Map('map', {
      center: [59.93635341, 30.32097631],
      zoom: 16,
      controls: []
    });
    myMap.geoObjects.add(new ymaps.Placemark([59.93635341, 30.32097631], {
      iconLayout: 'default#image',
      iconShadow: true,
      iconImageSize: [80, 140],
      iconShadowImageSize: [182, 110],
      iconImageOffset: [-40, -143],
      iconShadowImageOffset: [-5, -111]
    }));
    myMap.controls.add('zoomControl', {
      size: 'small',
      position: {
        bottom: 50,
        left: 10
      }
    });
    myMap.behaviors.disable('scrollZoom');
  }
}
