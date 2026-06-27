import { useState } from 'react'
import MenuGrid from './components/MenuGrid';
import Logo from './assets/Logo.png';
import CartSidebar from './components/CartSidebar';

const Fooditems = [
  { name: 'Pizza', price: 200,image:"/images/pizza.jpg"},
  { name: 'Burger', price: 100,image:"/images/burger.jpg" },
  { name: 'Pasta', price: 150,image:"/images/pasta.jpg" },
  { name: 'Noodles', price: 180,image:"/images/noodles.jpg" },
  { name: 'Fries', price: 100,image:"/images/fries.jpg" },
  { name: 'Coke', price: 50,image:"/images/coke.jpg" },
  {name:'Manchurian',price:180,image:"/images/manchurian.jpg"},
  {name:'Cold Coffee',price:100,image:"/images/coldcoffee.jpg"},
  {name:'Lemonade',price:30,image:"/images/lemonade.jpg"},
  {name: 'Iced Tea', price: 80, image: "/images/icedtea.jpg"},
{name: 'Nachos', price: 120, image: "/images/nachos.jpg"},
{name: 'Schezwan Noodles', price: 190, image: "/images/schezwannoodles.jpg"},
];

function App() {
  const [cart, setCart] = useState({});
  const totalItems = Object.values(cart).reduce((sum, qty) => sum + qty, 0);

function AddtoCart(name) {
  setCart({
    ...cart, 
    [name]: cart[name] ? cart[name]+1 : 1
  });
}

function RemovefromCart(name){
  const updated={...cart};
  if(updated[name]==1){
    delete updated[name];
  }
  else {
    updated[name]=cart[name]-1;
  }
  setCart(updated);
  };




  return (
    <div>
    <div>
      
      <img className="logo" src={Logo} alt="Logo" />
      <MenuGrid Fooditems={Fooditems} AddtoCart={AddtoCart} />
      <CartSidebar RemovefromCart={RemovefromCart} FoodItems={Fooditems}  AddtoCart={AddtoCart} counts={cart} />
    </div>
    <div><svg xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 284 315"
fill="none"
stroke="#FF981F"
stroke-width="4"
stroke-linecap="round"
stroke-linejoin="round"
width="100px"
  height="100px">
  <path d="M36 252 L42 242 L75 251 L113 255 L211 258 L240 255 L263 248 L264 256 L260 266 L253 273 L231 283 L189 290 L135 291 L91 290 L64 284 L52 277 L40 265 Z"/>

  <path d="M37 104
  C52 63 105 42 150 42
  C196 42 247 60 262 104"/>
  <path d="M37 105
C28 113 26 118 23 124"/>
  <path d="M262 105
 C271 113 273 118 276 124"/>
  <path d="M40 126
 C55 139 70 122 85 133
 C100 144 115 122 130 133
 C145 144 160 122 175 133
C190 144 205 122 220 133
C235 144 250 126 262 128"/>

  <path d="M67 151H235"/>

  <path d="M68 172H234"/>

  <path d="M55 196
  C83 187 115 184 150 184
  C185 184 217 187 245 196"/>

  <path d="M60 214
  C72 242 228 242 240 214"/>

  <path d="M73 253H227"/>

  {/* sesame seeds  */}
  <ellipse cx="91" cy="70" rx="4" ry="2"/>
  <ellipse cx="104" cy="64" rx="4" ry="2"/>
  <ellipse cx="126" cy="74" rx="4" ry="2"/>
  <ellipse cx="147" cy="66" rx="4" ry="2"/>
  <ellipse cx="170" cy="74" rx="4" ry="2"/>
  <ellipse cx="193" cy="67" rx="4" ry="2"/>
  <ellipse cx="214" cy="76" rx="4" ry="2"/>

  {/* middle seeds  */}
  <circle cx="94" cy="229" r="1.8"/>
  <circle cx="107" cy="231" r="1.8"/>
  <circle cx="119" cy="228" r="1.8"/>
  <circle cx="131" cy="231" r="1.8"/>
  <circle cx="144" cy="229" r="1.8"/>
  <circle cx="157" cy="231" r="1.8"/>
  <circle cx="170" cy="229" r="1.8"/>
  <circle cx="183" cy="231" r="1.8"/>
  <circle cx="196" cy="228" r="1.8"/>

  {/* decorative strokes  */}
  <path d="M66 167h20"/>
  <path d="M197 167h18"/>
  </svg>  
</div>
<div className="carticon">
  <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

  {/* cart body  */}
  <path d="M6 6H4V4H2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M6 6L8 14H18L20 8H6Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>

  {/* wheels  */}
  <circle cx="10" cy="18" r="1" stroke="currentColor" stroke-width="1"/>
  <circle cx="16" cy="18" r="1" stroke="currentColor" stroke-width="1"/>

  {/* badge circle */}
  <circle cx="18" cy="5" r="4" fill="red"/>

  {/* badge text */}
  <text x="18" y="6.2" text-anchor="middle" font-size="6" fill="white" font-family="Arial">
    {totalItems}
  </text>

</svg>
</div>
</div>
  );

}

export default App;