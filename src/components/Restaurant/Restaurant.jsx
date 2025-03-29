import { use } from 'react'
import { Menu } from '../Menu/Menu.jsx'
import { Reviews } from '../Reviews/Reviews.jsx'
import { ReviewForm } from '../ReviewForm/ReviewForm.jsx'
import { UserContext } from '../UserContext'

export const Restaurant = ({ restaurant }) => {
  const { name, menu, reviews } = restaurant
  const { user } = use(UserContext)
  return (
    <div className="restaurant">
      <h2>{name}</h2>
      <br/>
      {Boolean(menu.length) && <Menu menu={menu} />}
      <br/>
      {Boolean(reviews.length) && <Reviews reviews={reviews} />}
      <br/>
      {Boolean(user) && <ReviewForm />}
      <br/>
    </div>
  )
}
