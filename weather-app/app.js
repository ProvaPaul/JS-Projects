const apikey="c50c696613a06752bf70729b1cbddd41";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let srcButton=document.querySelector(".srcBtn");

async function weather(city){
    let response= await fetch(apiUrl+city + `&appid=${apikey}`);
    let data= await response.json();
    console.log(data);
    if(data.cod=='404'){
        document.querySelector(".error").innerText="City not found!";
        
    }else{
        let errormsg = document.querySelector(".error").style.display="none";
        document.querySelector(".place").innerHTML=data.name ;
    document.querySelector(".temperature").innerHTML=data.main.temp + "°C" ;
    document.querySelector(".hum1").innerHTML=data.main.humidity + " %";
    document.querySelector(".speed").innerHTML=data.wind.speed + " km/h";

    //update image part
    let image=document.querySelector(".img");
    let type=data.weather[0].main;
    if(type=="Haze"){
        image.src="images/th.jpeg";
    }else if(type=="Clear"){
        image.src="images/clear.png";
    }else if(type=="Clouds"){
        image.src="images/clouds.png";

    }else if(type=="Drizzle"){
        image.src="images/drizzle.png";

    }else if(type=="Mist"){
        image.src="images/mist.png";

    }else if(type=="Rain"){
        image.src="images/rain.png";

    }
    else{
        image.src="images/snow.png";

    }
    let chngbackground = document.querySelector(".select-below").style.display="block";
    }
    


}

srcButton.addEventListener(("click"),()=>{
    let cityname=document.querySelector(".srch").value;
    weather(cityname);
})

// const apikey="b2477c891f8040eabe65a044615f0de3";
// const apiUrl = "https://newsapi.org/v2/everything?q=";

// let srcButton=document.querySelector(".srcBtn");

// async function weather(m){
//     let response= await fetch(apiUrl+m+`&apiKey=${apikey}`);
//     let data= await response.json();
//     console.log(data);
//     if(data.cod=='404'){
//         document.querySelector(".error").innerText="City not found!";
        
//     }else{
//         let errormsg = document.querySelector(".error").style.display="none";
//         document.querySelector(".place").innerHTML=data.articles[0].author ;
//     document.querySelector(".temperature").innerHTML=data.articles[0].title + "°C" ;
//     // document.querySelector(".hum1").innerHTML=data.main.humidity + " %";
//     // document.querySelector(".speed").innerHTML=data.wind.speed + " km/h";

//     //update image part
//     let image=document.querySelector(".img");
    
//     let chngbackground = document.querySelector(".select-below").style.display="block";
//     }
    


// }

// srcButton.addEventListener(("click"),()=>{
//     let cityname=document.querySelector(".srch").value;
//     weather(cityname);
// })



