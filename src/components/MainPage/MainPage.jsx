import { useState } from 'react'
import { restaurants } from '../../mock'
import { Tabs } from '../Tabs/Tabs.jsx'
import { Restaurant } from '../Restaurant/Restaurant.jsx'

export const MainPage = () => {
  const [selectedRestaurantId, setSelectedRestaurantId] = useState(restaurants.length > 0 ? restaurants[0].id : null)
  const selectedRestaurant = restaurants.find((restaurant) => restaurant.id === selectedRestaurantId) ?? null
  const tabs = restaurants.map(({ id, name }) => ({
    title: name,
    value: id,
    active: id === selectedRestaurantId,
  }))
  return (
    <div className="main-page">
      {restaurants.length > 0 ? (
        <div className="content">
          <Tabs tabs={tabs} onClick={setSelectedRestaurantId} />
          <br />
          {Boolean(selectedRestaurant) && (
            <>
              {Array.from({ length: 5 }, (_, index) => (
                <div key={selectedRestaurant + index}>
                  <Restaurant restaurant={selectedRestaurant} />
                  <br />
                </div>
              ))}
            </>
          )}
        </div>
      ) : (
        <div className="empty-data">Данных нет</div>
      )}
    </div>
  )
}
