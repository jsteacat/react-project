import { useMemo, useState } from 'react'
import { Layout } from '../Layout/Layout.jsx'
import { restaurants } from '../../mock.js'
import { Restaurant } from '../Restaurant/Restaurant.jsx'
import { Tabs } from '../Tabs/tabs.jsx'

export const App = ({ title }) => {
  const [selectedRestaurant, setSelectedRestaurant] = useState(restaurants.length > 0 ? restaurants[0] : null)
  const [activeTabIndex, setActiveTabIndex] = useState(0)
  const tabs = useMemo(() => {
    return restaurants.map((restaurant, index) => ({
      title: restaurant.name,
      value: restaurant.id,
      active: index === activeTabIndex,
    }));
  }, [activeTabIndex, restaurants])
  
  const selectRestaurantHandler = (index) => {
    setActiveTabIndex(index)
    setSelectedRestaurant(restaurants[index])
  }
  return (
    <Layout>
      <h1>{title}</h1>
      {restaurants.length > 0 ? (
        <div className="content">
          <Tabs tabs={tabs} onEvent={selectRestaurantHandler} />
          <Restaurant restaurant={selectedRestaurant} />
        </div>
      ) : (
        <div className="empty-data">Данных нет</div>
      )}
    </Layout>
  
  )
}
