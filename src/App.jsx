import { useEffect, useState } from "react"
import films from "./data/films"
import { use } from "react"

function App() {

  const [selectGenre, setSelectGenre] = useState("Tutti")
  const [filteredFilms, setFilteredFilms] = useState(films)
  const [filterText, setFilterText] = useState("")


  // genre event
  useEffect(() => {
    if (selectGenre === "Tutti") {
      setFilteredFilms(films)
    } else {
      const filteredFilms = films.filter(film => film.genre === selectGenre)
      setFilteredFilms(filteredFilms)
    }
  }, [selectGenre])


  function submitFunction(event) {
    event.preventDefault()
    const filteredText = filteredFilms.filter(film => film.title.toLowerCase().includes(filterText.toLowerCase()))
    setFilterText("")
    setFilteredFilms(filteredText)
  }


  return (
    <>
      <h1>Films</h1>
      <ul>
        {filteredFilms.map((film, i) => <li key={i}><p>titolo : {film.title} <br />genere: {film.genre}</p></li>)}
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
      <hr />
      <h2>Filtro titolo</h2>
      <form onSubmit={submitFunction}>
        <input type="text" value={filterText} onChange={e => setFilterText(e.target.value)} />
        <button type="submit">cerca</button>
      </form>
    {filterText}
    </>
  )
}

export default App
