let url="https://emoji-api.com/emojis?access_key="
let apikey="5eb0ac9c43418130bbfd3f7009513e246baa06c5";
let btn=document.querySelector("#btn1");
let emojiArray=[];
async function emojiApi(word) {
    let response=await fetch(url+`${apikey}`);
    let data=await response.json();
    
    for(let i=0;i<1500;i++){
        emojiArray.push({
            name: data[i].character,
            code: data[i].unicodeName
        });
    }
    // let emoji=document.querySelector("emoji");
    // emoji.innerText=data[word].slug;
    return emojiArray;
    // console.log(data);
}

function display(number){
    btn.innerText=emojiArray[number].name;
    btn.style.height= "7rem";
    btn.style.width= "7rem";
    btn.style.marginLeft= "2.5rem";
    btn.style.fontSize= "4rem";

    let emoji=document.querySelector(".emoji");
    emoji.innerText=emojiArray[number].code;
    emoji.style.color="white";
    
}
        
btn.addEventListener(("click"),async()=>{
    let word=Math.floor(Math.random()*emojiArray.length);
    console.log(word);
    const emoji=await emojiApi();
    // console.log(emoji);
    
    // console.log(emoji[word].name);
    display(word);
})