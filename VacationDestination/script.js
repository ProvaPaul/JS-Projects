var nam=document.querySelector("#nam");
var loc=document.querySelector("#loc");
var photo=document.querySelector("#photo");
var desc=document.querySelector("#desc");
var submit=document.querySelector("#submit");


// var img=document.querySelector(".img");
// var place=document.querySelector(".h22");
// var locc=document.querySelector(".h33");
// var details=document.querySelector(".details");
// var remove=document.querySelector("#remove");

submit.addEventListener(("click"),function(event){  
          event.preventDefault();
          var errormsg=document.querySelector(".error");
          errormsg.innerText="";
          errormsg.style.marginTop="1rem";
          var head=document.querySelector(".headd");

    if(nam.value!="" && loc.value!="" && photo.value!="" && desc.value!=""){

    var outerdiv=document.querySelector(".box");
    outerdiv.innerText="";

    errormsg.innerText="Destination Details Added Successfully!";
    errormsg.style.color="rgb(4, 71, 4)";


    head.innerText="My WishList";

    var innerdiv=document.createElement("div");
    innerdiv.className="box";

    var img1=document.createElement("img");
    img1.className="img";
    img1.src=photo.value;
    innerdiv.appendChild(img1);

    var place1=document.createElement("h3");
    place1.className="h22";
    place1.innerText=nam.value;
    innerdiv.appendChild(place1);
    
    var loc1=document.createElement("h3");
    loc1.className="h33";
    loc1.innerText=loc.value;
    innerdiv.appendChild(loc1);

    var desc1=document.createElement("p");
    desc1.className="details";
    desc1.innerText=desc.value;
    innerdiv.appendChild(desc1);


    outerdiv.appendChild(innerdiv);

    }

    else{
        var form=document.querySelector(".form-in");
        // var errormsg=document.createElement("h3");
        // errormsg.className="error";
        errormsg.innerText="Please fillup the form correctly!";
        errormsg.style.color="red";
        form.append(errormsg);
    }

    remove.addEventListener(("click"),function(event){
    event.preventDefault();
    img1.src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/37/3b/ef/hakaluki-haor-moulvibazar.jpg?w=1200&h=700&s=1";
    place1.innerText="Enter place";
    loc1.innerText="Enter Location";
    desc1.innerText="Enter description";


})
    

});

