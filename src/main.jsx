import { createRoot } from 'react-dom/client'
import { App } from './components/App/App.jsx'
import './style.css'

const root = document.getElementById('root')

const reactRoot = createRoot(root)

reactRoot.render(<App title="Restaurants" />)
