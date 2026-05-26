import { useState } from 'react';
import './Product.css';

function Product({ title, price, img }) {
  const [count, setCount] = useState(0);

  const handleBuy = () => {
    setCount(count + 1);
  };

  return (
    <div className="product">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <p>Ціна: {price} грн</p>
      <button onClick={handleBuy}>Купити</button>
      {count > 0 && <p className="purchase-count">Куплено: {count}</p>}
    </div>
  );
}

export default Product;