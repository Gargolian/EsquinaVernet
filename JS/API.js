//API 
//let plato= document.getElementById("subdetallesDiv");
   // let imagen = document.getElementById("imgplato");
    //let imagen1 = document.getElementById("imgplato");
    let plato = document.getElementById("comidasDiv");


    document.addEventListener("DOMContentLoaded", function() {
        if (window.location.pathname === "/plato_del_dia.html") {
          // Hacer la solicitud Fetch a la API
          fetch("https://www.themealdb.com/api/json/v1/1/random.php")
            .then(response => response.json())
            .then(data => {
                let comida=data.meals[0];
                console.log(comida.strMeal);
                console.log(data);

         
                plato.innerHTML= `
                <div class="detalles1"> 
                    <img src=${comida.strMealThumb}>
                      
                    
                </div>
                <div class="subdetalles1">
                    <h4>${comida.strMeal}</h4>
                    <p>${comida.strInstructions}</p>  
                </div>
                
                
                
                `;
                imagen1.innerHTML= `<img src=${comida.strMealThumb}>`;

      
                


                

                


              
            })
            .catch(error => {
              // Manejar errores de la solicitud
              console.log("Ocurrió un error:", error);
            });
        }
      }); 