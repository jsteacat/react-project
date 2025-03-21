import { useState } from 'react'
import { Layout } from '../Layout/Layout.jsx'
import { restaurants } from '../../mock.js'
import { Restaurant } from '../Restaurant/Restaurant.jsx'
import { Tabs } from '../Tabs/tabs.jsx'

export const App = ({ title }) => {
  const [selectedRestaurantId, setSelectedRestaurantId] = useState(restaurants.length > 0 ? restaurants[0].id : null)
  const selectedRestaurant = restaurants.find((restaurant) => restaurant.id === selectedRestaurantId) ?? null
  const tabs = restaurants.map(({ id, name}) => ({
    title: name,
    value: id,
    active: id === selectedRestaurantId,
  }))
  
  const selectRestaurantHandler = (id) => {
    setSelectedRestaurantId(id)
  }
  return (
    <Layout>
      <h1>{title}</h1>
      {restaurants.length > 0 ? (
        <div className="content">
          <Tabs tabs={tabs} onClick={selectRestaurantHandler} />
          {Boolean(selectedRestaurant) && <Restaurant key={selectedRestaurantId} restaurant={selectedRestaurant} />}
        </div>
      ) : (
        <div className="empty-data">Данных нет</div>
      )}
    </Layout>
  )
}
