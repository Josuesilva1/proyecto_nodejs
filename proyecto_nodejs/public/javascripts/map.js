var map = L.map("main_map").setView([14.0723, -87.1921], 13);
//Vincula la instancia del mapa al elemento <div id="main_map"> de la vista.
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);
//Carga y renderiza las teselas (imágenes cartográficas) desde los servidores de OpenStreetMap.

// estadio
L.marker([14.0992, -87.2041]).addTo(map);
//ceutec
L.marker([14.0825, -87.1835]).addTo(map);
//unah
L.marker([14.0846, -87.1636]).addTo(map);

// funcion async de ajax para settear en el mapa
$.ajax({
    dataType: "json",
    url: "/api/bicicletasApi",
    success: function (result) {
        console.log(result);
        result.bicicletas.forEach(function (bici) {
            L.marker(bici.ubicacion, { title: String(bici.id) }).addTo(map);
        });
    }
});