import Header from "./components/Header"
import Note from "./components/Note"
import Button from "./components/Button/Button"
import { useState } from "react"
export default function App() {
  const [content, setContent] = useState('press')
  function handleClick(type)
  {
    console.log('btn clicked', type)
    setContent(type)
  }
  return (
    <div>
      <Header />
      <main>
        <section>
          <ul>
            <li>
              <Note
              title={"Первая"}
              time={"2020"}
              />
            </li>
          </ul>
        </section>
        <Button onClick={() => handleClick('first')}>Первая кнопка</Button>
        <Button onClick={() => handleClick('second')}>Вторая кнопка</Button>
        <Button onClick={() => handleClick('third')}>Третья кнопка</Button>
        <p>{content}</p>
      </main>
    </div>
  )
}