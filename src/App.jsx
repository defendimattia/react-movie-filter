import { useState } from "react"
import films from "./data/films"

function App() {

  const [selectGenre, setSelectGenre] = useState("Tutti")

  return (
    <>
      <h1>Films</h1>
      <ul>
        {films.map((film, i) => <li key={i}><p>titolo : {film.title} <br />genere: {film.genre}</p></li>)}
      </ul>
      <hr />
      <h2>Filtro genere</h2>
      <select value={selectGenre} onChange={e => setSelectGenre(e.target.value)}>
        <option>Tutti</option>
        <option>Fantascienza</option>
        <option>Thriller</option>
        <option>Romantico</option>
        <option>Azione</option>
      </select>
    </>
  )
}

export default App
