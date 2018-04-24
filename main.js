var ourRequest = new XMLHttpRequest();

ourRequest.open('GET','https://learnwebcode.github.io/json-example/animals-1.json');

ourRequest.onload = function(){
   
//    var ourData = ourRequest.responseText; //giant text string response
    var ourData = JSON.parse(ourRequest.responseText); //Read string text as JSON
    
    console.log(ourData[0]);
    
    
    
};

ourRequest.send();