const mapBoxKey= "a56b0dcf7e759c45c871e80cb9b279b0"
const OPEN_WEATHER_APPID= "643c69ae87e38d965588ede591ba564b"
const LINKEDIN_KEY= "00be6b88c5704a7279a9460ef5ea5551"

function GetInfo(){
    const newName=document.getElementById('cityInput');
    const cityName=document.getElementById("cityName");
    cityName.innerHTML ="--"+newName.value+"--"

    fetch("https://api.openweathermap.org/data/2.5/forecast?q="+newName.value+"&appid=643c69ae87e38d965588ede591ba564b")
        .then(response => response.json())
        .then(data =>{
            for(i=0;i<5;i++){
                document.getElementById("day" +(i+1)+"Des").innerHTML =(data.list[i].weather[0].description)
            }
            for(i=0;i<5;i++){
                document.getElementById("day" +(i+1)+"Min").innerHTML ="Min: " + Number(data.list[i].main.temp_min - 286.7).toFixed(1)+"°";
            }
            for(i=0;i<5;i++){
                document.getElementById("day" +(i+1)+"Max").innerHTML ="Max: " + Number(data.list[i].main.temp_max - 289.28).toFixed(1)+"°";
            }
            for(i = 0; i<5; i++){
                document.getElementById("img" +(i+1)).src = " https://openweathermap.org/img/wn/" + data.list[i].weather[0].icon+".png";
            }
            for(i = 0; i<5; i++){
                document.getElementById("day" +(i+1)+"Humid").innerHTML = "Hum: " + Number(data.list[i].main.humidity - 69).toFixed(1);
            }
            for(i = 0; i<5; i++){
                document.getElementById("day" +(i+1)+"Wind").innerHTML = " Wind: " + Number(data.list[i].wind.speed - 0.62).toFixed(1);
            }

        })
.catch(err => alert("something went wrong"))
}

function DefaultScreen(){
     document.getElementById("cityInput").defaultValue ="Dallas";
     GetInfo();
}
const d =new Date();
const weekday = ["Sunday","Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];

function CheckDay(day){
    if(day +d.getDay() > 6) {
        return day +d.getDay()-7;
    }
    else{
        return day +d.getDay();
    }
}

for (i = 0; i<5; i++){
    document.getElementById("day"+(i+1)).innerHTML = weekday[CheckDay(i)];
}

let myToken ="pk.eyJ1IjoiaG93ZWxsa2VuIiwiYSI6ImNsZjJzYTNiazBsYnAzeXBqZjdrZW96djMifQ.otX7RJGm05Flb7kye7wgvw";
mapboxgl.accessToken =myToken;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [-96.8,33.0], // starting position [lng, lat]
    zoom: 10, // starting zoom
});

var marker= new mapboxgl.Marker({
    draggable:true
})
    .setLngLat([-96.8,33.0])
    .addTo(map);

function onDragEnd() {
    let lngLat = marker.getLngLat();
    let arrWeather = [lngLat.lng, lngLat.lat];
    console.log(lngLat);
   GetInfo(arrWeather)

}
marker.on(`dragend`, onDragEnd);

function getLocation(searchString){
    geocode(searchString, myToken).then(function(results){
        marker.setlngLat(results);
    })
}



// map.event.addListener(marker, "dragend", function(event){
//     var lat, long, address;
//
//     console.log('I am dragged');
//     lat = marker.getPosition().lat();
//     long = marker.getPosition().lng();
//
//     var geocoder = new map.Geocoder()
//
// })

// function DisplayTraficCir(points) {
//     for (i=0;i<points.length;i++){
//         var myLatLng = new mapboxgl.maps.LatLng(points[i].latitude,points[i].longitude)
//         var marker = new mapboxgl.maps.Marker({
//             position: myLatLng,
//             map: map
//         });
//         google.maps.event.addListener(marker, 'click', function () {
//             var lng = points[i].longitue,
//                 lat = points[i].latitude;
//             alert( lat + "-" + lng );
//         });
//     }
// }