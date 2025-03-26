import { Tab } from './Tab.jsx'
import styles from './Tabs.module.css'

export const Tabs = ({ tabs, onClick }) => {
  return (
    <div className={styles.root}>
      {tabs.map((tab) => {
        return (
          <Tab tab={tab} key={tab.value} onClick={() => onClick(tab.value)} />
        )
      })}
    </div>
  )
}
