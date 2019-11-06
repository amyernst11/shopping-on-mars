import React from 'react';
import './App.css';

let shoppingCartItems = [
  {
    item: 'Fun Ball',
    image: 'https://bit.ly/2WKiSpE',
    description: "Get ready to roam the face of Mars! With this human hamster ball, you can have fun inside and outside your ship. It has great padding so you won't hurt yourself, and it has a built in oxygen filtration system so you don't have to wear a suit. Get roll'n!",
    price: 164.99
  },
  {
    item: 'Eeye-Book',
    image: 'https://bit.ly/2qtrmFS',
    description: "This virtual headset has a database of over 1 billion books. You can read anything you want. This device can track your thoughts on genres you want to read and you can mentally choose which book to read. It also has an eye tracker to change pages virtually. It's the perfect pasttime to read in any position you prefer.",
    price: 357.99

  },
  {
    item: 'Never-ending Chip Bag',
    image: 'https://bit.ly/34CTDIP',
    description: 'This bag has an unlimited supply of chips. All you have to do is choose your favorite bag of chips and it will be linked to a spacial dimension full of chips. You can be pulling endless amount of things just like Mary Poppins!',
    price: 53.99
  },
  {
    item: 'Portable Garden',
    image: 'https://bit.ly/33lX5r0',
    description: 'This little guy will be able to grow your food! You can carry it anywhere with you around the ship. And one of the best parts it that there is no dirt! Prepare to eat all the lettuce you want.',
    price: 89.99
  },
 {
    item: 'Cryopreservation Tank',
    image: 'https://bit.ly/2JUSELX',
    description: 'An icy tank great for boredom. This gadget allows you to sleep for periods of time during your travel in case you may find yourself without anything to do in the spaceship. You can set a timer to wake up a month later if you so choose!',
    price: 412.99
  }, 
]


function App() {
  return (
    <body>
        <div className="App">
          <h1>Prepare for Launch-off!!</h1>
          <h3>A site to buy all your needs for long jounerys.</h3>
          <SearchForm />
        </div> 
        <div className="shoppingCart">  
        <ShoppingCart />
        </div>
    </body>
  );
}

function ShoppingCart() {
  return(
    <div className="cart">
      {shoppingCartItems.map(Product)}
    </div>
  );
}

// function makeProduct(props){
//   return(
//     <Product item={props.item}
//             image={props.image}
//             description={props.description}
//             price={props.price}
//     />
//   )
// }


function Product(props) {
  return(
    <div className="product">
      <div className= "product-img">
          <img src={props.image} width="250" height="180"/>
      </div>
      <div className="product-info">
          <h2> {props.item} </h2>
          <p> {props.description} </p>
          <p className="priceProduct"> {"$" + props.price} </p>
      </div>
    </div>
  )
}

function SearchForm() {
  return(
    <form>
      <label>
        Search:
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}




export default App;
