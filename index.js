const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 800,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

/*====EJERCICIO NUCBA A)====*/

  const idImpar = pizzas.filter((pizzas) => pizzas.id % 2 !== 0);
  
  console.log('Estas son las pizzas con ID impar:');
  idImpar.forEach( (pizza) => {
    console.log(`ID: ${pizza.id} es la ${pizza.nombre}🍕`);
  });
    
/*====EJERCICIO NUCBA B)====*/

  const pizzaMenos600 = pizzas.some( (pizza) => pizza.precio < 600);

    if(pizzaMenos600){
      console.log('🟢Si, quedan pizzas menos de: 💲600');
    } 
    else{
      console.log('🔴No, no quedan pizzas menos de: 💲600😭');
    }
    
    
/*====EJERCICIO NUCBA C)====*/

console.log('Esta es la lista de las pizzas con sus precios:');

    pizzas.forEach( (pizza) => {
      console.log(`*La ${pizza.nombre}, tiene un precio de: 💲${pizza.precio}`);
    });
      
    
/*====EJERCICIO NUCBA D)====*/

      console.log('Los ingredientes de cada una de las pizzas son:');

      pizzas.forEach((pizza) => {
          console.log(`🍕La ${pizza.nombre}`);
          
          pizza.ingredientes.forEach(( (ingredientes) =>{
            console.log(`✔ ${ingredientes}`);
          }))
        });
            
          
      
      
      
      
  
