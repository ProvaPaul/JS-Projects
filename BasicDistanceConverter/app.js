var mile=document.querySelector("#distance");
var km=document.querySelector("#distance1");
var submit=document.querySelector("#submit");
var ans=document.querySelector(".invisible");

submit.addEventListener(("click"),function(event){
    event.preventDefault();
    km.value=parseFloat(((mile.value)*1.609).toFixed(3));
    if(km.value!="NaN"){
        console.log(km.value);

    ans.innerText=`${mile.value} mile is equal to ${km.value} Kilometers`;

    }
    else{
        console.log(km.value);

        ans.innerText=`Please enter a number!`
    }

    
    console.log(ans.innerText);

})

