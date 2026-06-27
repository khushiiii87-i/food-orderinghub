import { useState } from 'react'
import FoodCard from './FoodCard';

function MenuGrid(props) {
  const [search, setSearch] = useState("");

  const filteredItems = props.Fooditems.filter(food => 
    food.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input 
      className="searchbox"
        type="text" 
        placeholder="Search food..." 
        onChange={(e) => setSearch(e.target.value)} 
      />
      <div className="menu-grid">
        {filteredItems.map(food => 
          <FoodCard name={food.name} price={food.price} key={food.name} AddtoCart={props.AddtoCart} image={food.image} />
        )}
      </div>
    </div>
  );
}

export default MenuGrid;