var from=document.querySelector("#distance");
var submit=document.querySelector("#submit");
var ans=document.querySelector(".invisible");



var selectMile=document.querySelector("#mile");
var selectKM=document.querySelector("#km");
var selectOption=document.querySelector("#select");

submit.addEventListener(("click"),function(event){
    event.preventDefault(); 
    console.log(selectOption.value);

    if(selectOption.value=="miles"){
        ans.innerText=parseFloat(((from.value)*1.609).toFixed(3));
        if(ans.innerText!="NaN"){
            console.log(ans.innerText);
            ans.innerText=`${from.value} miles is equal to ${ans.innerText} Kilometers`;
        }
        else{
            console.log(ans.innerText);
            ans.innerText=`Please enter a number!`
        }
    }
    else{
        ans.innerText=parseFloat(((from.value)*0.621).toFixed(3));
        if(ans.innerText!="NaN"){
            console.log(ans.innerText);
            ans.innerText=`${from.value} miles is equal to ${ans.innerText} Kilometers`;
        }
        else{
            console.log(ans.innerText);
            ans.innerText=`Please enter a number!`
        }
    }
    

         console.log(ans.innerText);


})

