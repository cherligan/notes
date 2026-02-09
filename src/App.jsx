import Header from "./components/Header"
import Note from "./components/Note"
export default function App() {
  return (
    <div>
      <Header />
      <main>
        <Note
        title={"Первая"}
        time={"2020"}
        />
      </main>
    </div>
  )
}