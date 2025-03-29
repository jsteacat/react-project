import { Button } from '../Button/Button.jsx'

export const Tab = ({ tab, onClick }) => {
  const { title, active } = tab

  return (
    <Button disabled={active} onClick={onClick}>{title}</Button>
  )
}
