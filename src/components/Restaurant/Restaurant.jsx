import { Menu } from '../Menu/Menu.jsx'
import { Reviews } from '../Reviews/Reviews.jsx'
import { ReviewForm } from '../ReviewForm/ReviewForm.jsx'

export const Restaurant = ({ restaurant }) => {
  const { name, menu, reviews } = restaurant
  return (
    <div className="restaurant">
      <h2>{name}</h2>
      <br/>
      {Boolean(menu.length) && <Menu menu={menu} />}
      <br/>
      {Boolean(reviews.length) && <Reviews reviews={reviews} />}
      <br/>
      <ReviewForm />
      <br/>
    </div>
  )
}
