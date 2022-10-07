function getData(){
    fetch('www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
    .then(response => response.json())
    .then(data => leer(data));
    alert("Hola");
    }

    function leer(data){        
        document.getElementById("cocteles").innerHTML =""
        for (let i = 0; i < 6; i++){
            let nombre = data.drinks[i].strDrink;
            let ingrediente1 = data.drinks[i].strIngredient1
            let ingrediente2 = data.drinks[i].strIngredient2
            let ingrediente3 = data.drinks[i].strIngredient3
            let alcoholic = data.drinks[i].strAlcoholic
            let category = data.drinks[i].strCategory

            document.getElementById("cocteles").innerHTML +=`
            <div class="card" style="width: 20rem;">
            <img src="img/coctel.jpg" class="card-img-top" alt="..." id="img">
            <div class="card-body">
              <h5 class="card-title">${nombre}</h5> 
              <h6>Ingredientes</h6>
              <p class="card-text" id="ingredientes">${ingrediente1}, ${ingrediente2}, ${ingrediente3}</p>
              <h2>${alcoholic}</h2>
              <a href="#" class="btn btn-primary" id="comprar">Comprar</a>
            </div>
          </div>    
            `
            
           
        }

        leer();
    }

leer();