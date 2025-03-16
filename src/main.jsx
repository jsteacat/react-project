import { createRoot } from 'react-dom/client'
import { restaurants } from './mock'

const root = document.getElementById('root')

const reactRoot = createRoot(root)

reactRoot.render(
  <div className="restaurants">
    <h1>Restaurants</h1>
    {restaurants.map((restaurant) => {
      return (
        <div key={restaurant.id} className="restaurant">
          <h2>{restaurant.name}</h2>
          <h3>Menu</h3>
          <ul className="menu">
            {restaurant.menu.map((menuItem) => {
              return (
                <li key={menuItem.id}>
                  {menuItem.name}
                </li>
              )
            })}
          </ul>
          <h3>Reviews</h3>
          <ul className="reviews">
            {restaurant.reviews.map((review) => {
              return (
                <li key={review.id}>
                  {review.text}
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
