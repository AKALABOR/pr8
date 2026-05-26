import './App.css'
import Product from './Product.jsx';
import { products } from './products.js';

function App() {

  return (
    <>
      <header>
        <h1>Ласкаво просимо до магазину</h1>
        <p>Оберіть товари, які бажаєте придбати.</p>
      </header>
      <main className="product-list">
        {products.map(product => <Product key={product.id} {...product} />)}
      </main>
    </>
  )
}

export default App
