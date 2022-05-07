// 354c175d50cc151f42453129d495c79d    ce886985e67d98afeeb295c4e70a720b
let key = 'ce886985e67d98afeeb295c4e70a720b'
let container = document.getElementById("container");
let iframe = document.getElementById("gmap_canvas");
async function getWeatherData() {
    try{
let city = document.getElementById("city").value;

let res = await fetch(`https:/api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`)
let data = await res.json()

showWeather(data)
// }

// console.log("data:", data);
// }  
getWeatherData() 

} catch (err){
   console.log("err:", err) 

}

}
// for any city I should be able to get weather
function showWeather(d){
console.log("d", d);

container.innerHTML = null;

let name = document.createElement("p")
name.innerText = d.name;
let temp = document.createElement("p")
temp.innerText = `Temp - ${d.main.temp}`;
let  humidity = document.createElement('p')
humidity.innerText = `Humid -${d.main.humidity}`;
let pressure = document.createElement('p')
pressure.innerText = `Pressure - ${d.main.pressure}`;
// iframne.src = ""


container.append(name,temp,humidity, pressure);
}
