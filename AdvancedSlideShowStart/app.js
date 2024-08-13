var previous=document.querySelector("#previous");
var next=document.querySelector("#next");
var arr=["slides/image1.jpg","slides/image2.jpg","slides/image3.jpg","slides/image4.jpg","slides/image5.jpg"];

// var img=document.querySelector("#myimage");
var div=document.querySelector("#content");
// img.src=arr[0];
// console.log(img.src);  
var x=0,y=4;
next.addEventListener(("click"),function(){   
    if(x==arr.length-1){ 
        x=0;
        var img=document.createElement("img");
        img.src=arr[x];
        img.className="fadeinimg";
        div.appendChild(img);
        if(div.children.length>2){
            div.removeChild(div.children[0]);
        }
    } 
    else{    
       x++;
       var img=document.createElement("img");
        img.src=arr[x];
        img.className="fadeinimg";
        div.appendChild(img);
        if(div.children.length>2){
            div.removeChild(div.children[0]);
        }
        // img.src=arr[x];  
    }   
    console.log(img.src);
});

previous.addEventListener(("click"),function(){   
    if(x==0){ 
    x=4;
    var img=document.createElement("img");
        img.src=arr[x];
        img.className="fadeinimg";
        div.appendChild(img);
        if(div.children.length>2){
            div.removeChild(div.children[0]);
        }

    // img.src=arr[x]; 
    

} 
else{  
        x--;
  
        var img=document.createElement("img");
        img.src=arr[x];
        img.className="fadeinimg";
        div.appendChild(img); 
        if(div.children.length>2){
            div.removeChild(div.children[0]);
        }
}   
console.log(img.src);
});