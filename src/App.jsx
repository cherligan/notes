import Header from "./components/Header"
import Note from "./components/Note/Note"
import Button from "./components/Button/Button"
import { useState } from "react"
export default function App() {
  const [contentType, setContentType] = useState(null)
  function handleClick(type)
  {
    setContentType(type)
  }
  return (
    <div>
      <Header />
      <div className="screen">
        <div className="left-path">
          <main>
            <section>
              <ul>
                <li>
                  <Note
                  time={"2020"}
                  title={"Первая"}
                  />
                </li>
                <li>
                  <Note
                  title={"Первая"}
                  time={"2020"}
                  />
                </li>
              </ul>
            </section>
            <Button isActive={contentType == 'first'} onClick={() => handleClick('first')}>Первая кнопка</Button>
            <Button isActive={contentType == 'second'} onClick={() => handleClick('second')}>Вторая кнопка</Button>
            <Button isActive={contentType == 'third'} onClick={() => handleClick('third')}>Третья кнопка</Button>
            <p>{contentType}</p>
          </main>
        </div>
        <div className="right-path">
          правая часть
        </div>
      </div>
    </div>
  )
}