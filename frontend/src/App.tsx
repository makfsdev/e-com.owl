import { sampleProduct } from './data'
import './App.css'

const App = () => {
  return (
    <div>
      <header>E-COM.OWL</header>
      <main>
        <ul>
          {sampleProduct.map((product) => (
            <li key={product.slug}>
              <img
                className='product-image'
                src={product.image}
                alt={product.image}
              />
              <h2>{product.name}</h2>
              <p>${product.price}</p>
            </li>
          ))}
        </ul>
      </main>
      <footer>All right reserved</footer>
    </div>
  )
}

export default App
