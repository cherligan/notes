import logo from '/src/assets/react.svg'
const now = new Date()
export default function Header()
{
  return(
    <header>
      <img src = {logo} alt = "" />
      <span>Время сейчас: {now.toLocaleTimeString()}</span>
   </header>
  )
}