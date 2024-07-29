let apiKey="9f362408-5203-42ce-8b63-d7d0ccf5a5a7"
let url="https://dictionaryapi.com/api/v3/references/ithesaurus/json/"

let btn=document.querySelector("button");

async function dictionaryapi(word){
    let response=await fetch(url+word+`?key=${apiKey}`);
    let data=await response.json();
    return data;
    console.log(data);

}

function display(searchWord){
    searchWord.forEach((word)=>{
        
        let container=document.querySelector(".container");
        let contain=document.createElement("div");
        contain.classList.add("contain");

        let partsOfSpeech=document.createElement("div");
        partsOfSpeech.classList.add("partsOfSpeech");
        partsOfSpeech.innerText="PartsOfSpeech:  ";   
        partsOfSpeech.style.fontWeight="bold"  ;  
        contain.appendChild(partsOfSpeech);

        let definition1=document.createElement("div");
        definition1.classList.add("definition1");
        definition1.innerText=word.fl;       
        contain.appendChild(definition1);

        let def=document.createElement("span");
        def.classList.add("def");
        def.innerText="\nDefinition: ";   
        def.style.fontWeight="bold"  ;  
        contain.appendChild(def);


        let definition=document.createElement("span");
        definition.innerText=word.shortdef[0];       
        contain.appendChild(definition);


        

        let synonym=document.createElement("span");
        synonym.classList.add("synonym");
        synonym.innerText="\nsynonym: ";   
        synonym.style.fontWeight="bold"  ;  
        contain.appendChild(synonym);

        let definition2=document.createElement("span");
        definition2.innerText=word.meta.syns[0];     
        contain.appendChild(definition2);

        let antonym=document.createElement("span");
        antonym.classList.add("antonym");
        antonym.innerText="\nAntonym: ";   
        antonym.style.fontWeight="bold"  ;  
        contain.appendChild(antonym);

        let definition3=document.createElement("span");
        definition3.innerText=word.meta.ants[0]+"\n";     
        contain.appendChild(definition3);
        
        // let type=document.querySelector(".type").innerText=word.syns;
        console.log(word);
        container.append(contain);
        
    });
}

btn.addEventListener(("click"),async()=>{
    let word=document.querySelector(".input").value;
    let theWord=await dictionaryapi(word);
    console.log(word);
    display(theWord);
})
