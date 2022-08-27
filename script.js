//selector 
const output = document.querySelector(".output");

const result = document.querySelector(".result");

const keys = document.querySelectorAll("button");

//eventlistener
keys.forEach(key=> {
    key.addEventListener("click", calculate)
});

function calculate() {
 let buttonText = this.innerText; //appears the text of the button
if(buttonText === "AC"){
    output.innerText = "";
    result.innerText = "0";
    result.style.animation = "";
    output.style.animation="";
    return;
}//clears everything


if(buttonText === "DEL"){
    output.textContent = output.textContent.substr(0,output.textContent.length-1);
    result.innerText = ""
    return;
}//deletes the last element

if(buttonText==="="){
    result.innerText = eval(output.innerText);
    result.style.animation = "big 0.5s ease-in-out"
    output.style.animation="small 0.5s ease-in-out"
    result.style.animationFillMode = "forwards"
    output.style.animationFillMode = "forwards"
    return;
}//arrears result

else{
    output.textContent += buttonText;
    return;
}
}