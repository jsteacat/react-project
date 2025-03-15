import { createRoot } from 'react-dom/client'
import { restaurants } from './mock'

const root = document.getElementById('root')

const reactRoot = createRoot(root)

reactRoot.render(
  <div className="restaurants">
    {restaurants.map((restaurant) => {
      return (
        <div key={restaurant.id} className="restaurant">
          <h2>{restaurant.name}</h2>
          <h3>Menu</h3>
          <ul className="menu">
            {restaurant.menu.map((item) => {
              return (
                <li key={item.id}>
                  {item.name}
                </li>
              )
            })}
          </ul>
          <h3>Reviews</h3>
          <ul className="reviews">
            {restaurant.reviews.map((item) => {
              return (
                <li key={item.id}>
                  {item.text}
                </li>
              )
            })}
          </ul>
          <br/>
        </div>
      )
    })}
  </div>
)
