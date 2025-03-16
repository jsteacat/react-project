export const Tab = ({ tab, onEvent }) => {
  const { title, active } = tab

  return (
    <button disabled={active} onClick={onEvent}>{title}</button>
  )
}
