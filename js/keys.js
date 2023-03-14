const MAPBOX_KEY= "e7b9f4d85e2fbdde0e87b041d30a1e30"
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
                document.getElementById("day" +(i+1)+"Min").innerHTML ="Min: " + Number(data.list[i].main.temp_min - 286.7).toFixed(1)+"°";
            }
            for(i=0;i<5;i++){
                document.getElementById("day" +(i+1)+"Max").innerHTML ="Max: " + Number(data.list[i].main.temp_max - 289.28).toFixed(1)+"°";
            }
            for(i = 0; i<5; i++){
                document.getElementById("img" +(i+1)).src = " https://openweathermap.org/img/wn/" + data.list[i].weather[0].icon+".png";
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

