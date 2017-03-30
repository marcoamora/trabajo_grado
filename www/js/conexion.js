//esperar para cargar cordova
document.addEventListener("Inicio dispositivo", onDeviceReady, false);

//abrir la base de datos
function onDeviceReady() {

  window.sqlitePlugin.importPrepopulatedDatabase({file: “rutasSangil.sqlite”, “importIfExists”: true});
  var db = window.sqlitePlugin.opendatabase({name: "movies.sqlite"}
  function(e) {
     console.log("ERROR: " + e.message);
   });
 );
}
