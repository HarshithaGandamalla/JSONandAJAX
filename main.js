var pageCounter =1;
var btn = document.getElementById('btn');
var animalContainer  = document.getElementById('animal-info');


btn.addEventListener("click",function(){
   
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET','https://learnwebcode.github.io/json-example/animals-'+pageCounter+'.json');
    ourRequest.onload = function(){
    //var ourData = ourRequest.responseText; //giant text string response
    if(ourRequest.status>=200 && ourRequest.status<400){    
    renderHTML(ourRequest.responseText);
    }else{
        console.log("Connected to server, but error receiveing data from server");
    }
         
    
    };

    ourRequest.send(); //sending our request 
    pageCounter++;
    if(pageCounter>3)
        btn.classList.add("hide-me");
});

function renderHTML(data){
    var ourData = JSON.parse(data); //Read string text as JSON
    var htmlString ="";
    for(var i=0;i<ourData.length;i++){
        htmlString += "<p>"+ourData[i].name+" is a "+ourData[i].species+ ".</p>";
    }
        
    animalContainer.insertAdjacentHTML('beforeend',htmlString);  
}

