function fillTable(data){
    var table = document.querySelector("card");

    for (let json in data){
        
   

   let object = data[json];
   let strDrink = object.strDrink;
   let strIngredient1 = object.strIngredient1;
   
    
    let row = card.insertRow();

        let cell_index = row.insertCell();
        cell_index.innerHTML = json;

   var cell_cm = row.insertCell();
   cell_strDrink.innerHTML =  object.strDrink;

   var cell_edad = row.insertCell();
   cell_strIngredient1.innerHTML =  object.strIngredient1;

        
}
}


function getData(){
fetch('www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
.then(response => response.json())
.then(data => fillTable(data));
}


    getData();  

//getData();