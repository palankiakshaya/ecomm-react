import React from 'react'


export default function App() {

  let fruits = [
    {
        name: "coffee",
        description: "Mind Refreshment.",
        price: 3,
        image:"https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },

    {
        name: "Pizza",
        description: "Gain Calories",
        price: 12,
        image:"https://media.istockphoto.com/id/938742222/photo/cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=D1z4xPCs-qQIZyUqRcHrnsJSJy_YbUD9udOrXpilNpI=",

    },
    {
        name: "Burger",
        description: "Eat Me",
        price:2,
        image:"https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D",

    },
    {
        name: "Falooda",
        description: "Make your life like me colourful",
        price: 8,
        image:"https://mir-s3-cdn-cf.behance.net/project_modules/disp/b9c09558295129.59f7371854738.jpg",

    },
    {
        name: "Milkshake",
        description: "Get Cold",
        price: 24,
        image:"https://images.unsplash.com/photo-1624781748172-7151704a42b5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1pbGtzaGFrZXxlbnwwfHwwfHx8MA%3D%3D",

    },
    {name: "CupCakes",
        description: "Throw wrapper after eating",
        price: 3,
        image:"https://food-images.files.bbci.co.uk/food/recipes/cupcakes_93722_16x9.jpg",
    },
    
];
  return (
  <div>
      {fruits.map((value,index)=>(
          <div className='container'>
              <p><img src={value.image} width={175} height={150}></img></p>
              <p>{value.name}</p>
              <p>{value.description}</p>
              <p>{value.price}</p>
            </div> 

          ))
      }
  </div>
)
  
   return (
    <div>
      <center><h1>SAF</h1></center> 
      <marque><h3><i>Enjoy the date</i></h3></marque><hr></hr>
        <div className='main1'> 
        </div>  
    </div>
);
}

