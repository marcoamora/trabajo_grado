//Variables
var map;
var coordenadas;

//inicializa el mapa en la posicion dada en est caso San Gil
function initMap(){
    map = new google.maps.Map(document.getElementById("map"),{
      center:{lat:6.55059, lng:-73.136742},
      zoom: 14,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
}

//Muestra una ruta ficticia de un recorrido de  un bus mejoras dejar que la base de datos de las coordenadas
function mostrarRuta(){
  coordenadas = [
    {lng:-73.13738, lat:6.55988},
    {lng:-73.13725, lat:6.55981},
    {lng:-73.13724, lat:6.5598},
    {lng:-73.13693, lat:6.55955},
    {lng:-73.13678, lat:6.55945},
    {lng:-73.13663, lat:6.55934},
    {lng:-73.13644, lat:6.55919},
    {lng:-73.13624, lat:6.55903},
    {lng:-73.13589, lat:6.55876},
    {lng:-73.13555, lat:6.55849},
    {lng:-73.1352, lat:6.55826},
    {lng:-73.13485, lat:6.55802},
    {lng:-73.13461, lat:6.55789},
    {lng:-73.13438, lat:6.55775},
    {lng:-73.13394, lat:6.55751},
    {lng:-73.13351, lat:6.55727},
    {lng:-73.13323, lat:6.55709},
    {lng:-73.13294, lat:6.55691},
    {lng:-73.1325, lat:6.5567},
    {lng:-73.13205, lat:6.55649},
    {lng:-73.13228, lat:6.55612},
    {lng:-73.13252, lat:6.55575},
    {lng:-73.1329, lat:6.55597},
    {lng:-73.13329, lat:6.5562},
    {lng:-73.1336, lat:6.55642},
    {lng:-73.13391, lat:6.55663},
    {lng:-73.13432, lat:6.55689},
    {lng:-73.13474, lat:6.55714},
    {lng:-73.13496, lat:6.55677},
    {lng:-73.13518, lat:6.5564},
    {lng:-73.13539, lat:6.55654},
    {lng:-73.1356, lat:6.55668},
    {lng:-73.13539, lat:6.55705},
    {lng:-73.13518, lat:6.55741},
    {lng:-73.13555, lat:6.55769},
    {lng:-73.13592, lat:6.55796},
    {lng:-73.13629, lat:6.55817},
    {lng:-73.13663, lat:6.5584},
    {lng:-73.13694, lat:6.5586},
    {lng:-73.13713, lat:6.55874},
    {lng:-73.13733, lat:6.55887},
    {lng:-73.13765, lat:6.55908},
    {lng:-73.13767, lat:6.55909},
    {lng:-73.13805, lat:6.55928},
    {lng:-73.13785, lat:6.55963},
    {lng:-73.13764, lat:6.55998},
    {lng:-73.13778, lat:6.56003},
    {lng:-73.13786, lat:6.56005},
    {lng:-73.13813, lat:6.5601},
    {lng:-73.13825, lat:6.56014},
    {lng:-73.13872, lat:6.56029},
    {lng:-73.13841, lat:6.56099},
    {lng:-73.1384, lat:6.56098},
    {lng:-73.13785, lat:6.56073},
    {lng:-73.13739, lat:6.56056},
    {lng:-73.13752, lat:6.56027},
    {lng:-73.13764, lat:6.55998},
    {lng:-73.13753, lat:6.55995},
    {lng:-73.13743, lat:6.5599},
    {lng:-73.13738, lat:6.55988}
  ];
  //pinta la polilinea
 var ruta1 = new google.maps.Polyline({
 path: coordenadas,
 geodesic: true,
 strokeColor: '#000000',
 strokeOpacity: 1.0,
 strokeWeight: 2
});
ruta1.setMap(map);

}

function mostrarPosition(){
    var marker = new google.maps.InfoWindow({
        map:map,
        zoom:14
    });
    
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){
            var pos={
                lat:position.coords.latitude,
                lng:position.coords.longitude
            };
            
            marker.setPosition(pos);
            marker.setContent('Usted esta aqui');
            map.setCenter(map);
        },function(){
            handleLocationError(true,marker,map.getCenter());
        });
    } else{
        handleLocationError(false.marker,map.getCenter());
    }
    
    function handleLocationError(){
        marker.setPosition(pos);
        marker.setContent(browserHasGeolocation ?
                         'error: el servicio de geolocalizacion fallo':
                         'error: tu navegador no soporta la geolocalizacion');
    }
    
                                
}
