function dbCreacion() {
  var db = null;

document.addEventListener('deviceready', function() {
  db = window.sqlitePlugin.openDatabase({name: 'proyectoRutas', location: 'default'});
});

db.transaction(function(tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS rutas (id_ruta INTEGER NOT NULL PRIMARY KEY, empresa CHARACTER VARYING(50), nom_ruta CHARACTER VARYING NOT NULL, cant_ruta INTEGER, hor_inicio TIME WITHOUT TIME ZONE, hor_final TIME WITHOUT TIME ZONE, frecuencia CHARACTER VARYING(50),tarifa DOUBLE, descripcion CHARACTER VARYING(100),estado TEXT NOT NULL );');
    tx.executeSql('SELECT  ADDGEOMETRYCOLUMN ("rutas","lineasRutas",4236,"LINESTRING", "XY",1 );');
    tx.executeSql('CRATE TABLE IF NOT EXISTS puntos_interes(id_punto INTEGER NOT NULL PRIMARY KEY, empresa CHARACTER VARYING(50), descripcion_punto CHARACTER VARYING(100) );');
    tx.executeSql('SELECT ADDGEOMETRYCOLUMN ("puntos_interes","coordenadas_punt", 4236, "LINESTRING", "XY",1);');
  }, function(error) {
    console.log('ERROR: ' + error.message);
  }, function() {
    console.log('base de datos OK');
  });
}
