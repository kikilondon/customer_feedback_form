var myText = document.getElementById("my-text");
var result = document.getElementById("result");
var limit = 240;
result.textContent = 0 + "/" + limit;

myText.addEventListener("input",function(){
    var textLength = myText.value.length;
   
    result.textContent = textLength + "/" + limit;

    if(textLength > limit){
        myText.style.borderColor = "#ff2851";
        result.style.color = "#ff2851";
    }
    else{
        myText.style.borderColor = "#39275A";
     result.style.color = "#737373";
    }
});
//console.log(textLength);

const myForm = document.getElementById("my Form");
myForm.addEventListener("submit",(event) => {
   event.preventDefault();

    console.log ("Form has been submitted!");
});
