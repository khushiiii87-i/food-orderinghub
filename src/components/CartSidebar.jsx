function CartSidebar({ counts, FoodItems,RemovefromCart,AddtoCart }) {
  
  const total = Object.keys(counts).reduce((sum, name) => {
    const item = FoodItems.find(food => food.name === name);
    return sum + (item.price * counts[name]);
  }, 0);

  return (
    <div className="cart">
    <table className="cart_table">
      <thead>
         
        <tr>
          <th>Item</th>
          <th></th>
          <th>Qty</th>
          <th></th>
          <th>Price per<br></br>
            item</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
   
        {Object.keys(counts).map(name => {
          const item = FoodItems.find(food => food.name === name);
          return (
           
            <tr key={name}>
              <td>{name}</td>
              <td> <button className="rem-btn"onClick={()=>{RemovefromCart(name)}}>-</button></td>
             
              <td>{counts[name]}</td>
              <td> <button className="add-btn1"onClick={()=>{AddtoCart(name)}}>+</button></td>
             
              <td>{item.price}</td>
              <td>{item.price * counts[name]}</td>
            </tr>
            
          );
        })}
      <tr></tr>
      
      </tbody>
      <tfoot>
        <tr></tr>
        <tr></tr>
        <tr>
          <td colSpan="3"><strong>Grand Total</strong></td>
          <td><strong>{total}</strong></td>
        </tr>
      </tfoot>
    </table>
    </div>
  );
}

export default CartSidebar;