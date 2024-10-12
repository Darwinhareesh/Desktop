btn=document.querySelector("button");
div1=document.getElementById('0');
div2=document.getElementById('1');
div3=document.getElementById('2');
div4=document.getElementById('3');
div5=document.getElementById('4');
btn.addEventListener("click",()=>{
let cityname=document.getElementById('city').value;
let lang = document.getElementById('language').value;
let url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityname}&appid=6b3e821d8692f8df6fddea0b73717fff&lang=${lang}`;
arr=[]
fetch(url)
.then((res)=>{
    let jsondata=res.json()
    .then((data)=>{
        console.log(data)
         for(let i=0;i<5;i++){ 
            let weatherId = data.list[i].weather[0].id;
            let weather=data.list[i].weather[0].description;
            let DateTime=data.list[i].dt_txt;
            let Temperature=Math.round(data.list[i].main.temp-273.15);
            let Humidity=data.list[i].main.humidity;
            let  WindSpeed=data.list[i].wind.speed;
            let sunrise=data.city.sunrise;
            let sunset=data.city.sunset;
            let country=data.city.country;
            arr.push({weatherId,weather,DateTime,Temperature: `${Temperature}°C`,Humidity,WindSpeed,sunrise,sunset,country});
       }
       function changeBackground(div, className, weatherId) {
        if (weatherId >= 200 && weatherId < 300) {
            document.querySelector(`.${className}`).style.backgroundImage = "url('./thunderstorm.gif')";
        } else if (weatherId >= 300 && weatherId < 500) {
            document.querySelector(`.${className}`).style.backgroundImage = "url('./drizzle.gif')";
        } else if (weatherId >= 500 && weatherId < 600) {
            document.querySelector(`.${className}`).style.backgroundImage = "url('./rain.gif')";
        } else if (weatherId >= 600 && weatherId < 700) {
            document.querySelector(`.${className}`).style.backgroundImage = "url('./snow.gif')";
        } else if (weatherId >= 700 && weatherId < 800) {
            document.querySelector(`.${className}`).style.backgroundImage = "url('./mist.gif')";
        } else if (weatherId === 800) {
            document.querySelector(`.${className}`).style.backgroundImage = "url('./clear.gif')";
        } else if (weatherId > 800 && weatherId < 900) {
            document.querySelector(`.${className}`).style.backgroundImage = "url('./clody.gif')";
        } else {
            document.querySelector(`.${className}`).style.background = 'white';
        }
    }
       div1.innerText = `
                        Date/Time: ${arr[0].DateTime}
                        Weather: ${arr[0].weather}
                        Temperature: ${arr[0].Temperature}
                        Humidity: ${arr[0].Humidity}%
                        Wind Speed: ${arr[0].WindSpeed} m/s
                        country:${arr[0].country}
                    `;
        div2.innerText = `
                        Date/Time: ${arr[1].DateTime}
                        Weather: ${arr[1].weather}
                        Temperature: ${arr[1].Temperature}
                        Humidity: ${arr[1].Humidity}%
                        Wind Speed: ${arr[1].WindSpeed} m/s
                        country:${arr[1].country}
                        `;
         div3.innerText = `
                        Date/Time: ${arr[2].DateTime}
                        Weather: ${arr[2].weather}
                        Temperature: ${arr[2].Temperature}
                        Humidity: ${arr[2].Humidity}%
                        Wind Speed: ${arr[2].WindSpeed} m/s
                        country:${arr[2].country}
                        `; 
        div4.innerText = `
                        Date/Time: ${arr[3].DateTime}
                        Weather: ${arr[3].weather}
                        Temperature: ${arr[3].Temperature}
                        Humidity: ${arr[3].Humidity}%
                        Wind Speed: ${arr[3].WindSpeed} m/s
                        country:${arr[0].country}
                        `;    
        div5.innerText = `
                        Date/Time: ${arr[4].DateTime}
                        Weather: ${arr[4].weather}
                        Temperature: ${arr[4].Temperature}
                        Humidity: ${arr[4].Humidity}%
                        Wind Speed: ${arr[4].WindSpeed} m/s
                        country:${arr[0].country}
                        `;              
        changeBackground(div1, 'a', arr[0].weatherId);
        changeBackground(div2, 'b', arr[1].weatherId);
        changeBackground(div3, 'c', arr[2].weatherId);
        changeBackground(div4, 'd', arr[3].weatherId);
        changeBackground(div5, 'e', arr[4].weatherId);
        document.querySelectorAll('.f, .g, .h, .i, .j, .a, .b, .c, .d, .e').forEach((div, index) => {
            setTimeout(() => {
                div.classList.add('show');
            }, index * 200); 
        });
    })
    .catch(()=>{
        alert("Once crosscheck the cityname");
    }
    )
})
.catch(()=>{
    alert("unable to fetch data");
})
})
