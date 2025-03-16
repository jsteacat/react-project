import { Tab } from './tab.jsx'

export const Tabs = ({ tabs, onEvent }) => {
  return (
    <div className="tabs" style={{display: 'flex'}}>
      {tabs.map((tab, index) => {
        return (
          <Tab tab={tab} key={tab.value} onEvent={() => onEvent(index)} />
        )
      })}
    </div>
  )
}
