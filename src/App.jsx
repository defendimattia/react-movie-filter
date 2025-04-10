import films from "./data/films"

function App() {

  return (
    <>
      <h1>Films</h1>
      <ul>
        {films.map((film, i) => <li key={i}><p>titolo : {film.title} genere: {film.genre}</p></li>)}
      </ul>
      <hr />
      <h2>Filtro genere</h2>
      <select>        
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
