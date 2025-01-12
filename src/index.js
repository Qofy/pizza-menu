import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/index.css';
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];


function App(){
  return(
    <div className='container'>
     <Headers/>
      <Menu/>
    <Footer/>
    </div>
  )
}
   
function Headers(){
  // const style = {
  //   color: 'red',
  //   fontSize: '48px',
  //   textTransform: 'upperCase',
  // };

  const style = {};
return (
<header className='header'>
<h1 style={style}>Fast React Pizza Co</h1>

</header>
)
}

function Menu(){
return(
 <main className='menu'>
<h2>Our Menu</h2>
<ul className='pizzas'>
{pizzaData.map(pizza => <Pizza pizzaobj={pizza} key={pizza.name}/>)}
</ul>
{/* <Pizza name='Pizza Spinaci' photoName='pizzas/spinaci.jpg' ingredients=' Tomato, mozarella, spinach, and ricotta cheese' price={13}/>
<Pizza name= 'Pizzza Margherita' photoName='pizzas/margherita.jpg' ingredients="Tomato and mozarella" price={12}/> */}

 </main> 
)
}

function Pizza(props){ 
  return(
    <li className='pizza'>
      <img src={props.pizzaobj.photoName} alt='pizza'/>
      <div>
      </div>
    <h3>{props.pizzaobj.name}</h3>
    <p>
    {props.pizzaobj.ingredients}
    </p>
    <span>
      {props.pizzaobj.price + 3}
    </span>
    </li>
  )
}

function Footer(){

  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  console.log(isOpen)
  return (
    <footer className='footer'>
      {isOpen && (
        <div className='order'>
          <p>We're Open until {closeHour}:00. Come visit us or order online</p>
          <button className='btn'>
        Order
          </button>
        </div>
      )}
    </footer>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(<React.StrictMode>
  <App/>
  </React.StrictMode>)