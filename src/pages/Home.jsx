import Card from '../components/Product-Card/Card'
import data from '../../data.json'
import Cart from '../components/Cart/Cart'
import OrderModal from '../components/OrderModal/OrderModal'
import { useNavigate } from 'react-router-dom'
export default function Home() {
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('user')
    navigate('/login')
}
  return (
        <main>
        <button className="logout-btn" onClick={logout}>Cerrar sesión</button>
        <div className="App-container">
        <div className="products-container">
        <div className="App-header">
          <h2>Desserts</h2>
          </div>
            <div className="product-list">
            {data.map((product, index)=> (
            <Card
            key= {index} 
            product = {product}/> 
            ))} 
            </div> 
        </div>
        <div className="Cart">
           <Cart/>
         </div>
        </div>

        <OrderModal />
        </main>
  )
}
