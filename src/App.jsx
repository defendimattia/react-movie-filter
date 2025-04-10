import films from "./data/films"

function App() {

  return (
    <>
      <h1>Films</h1>
      <ul>
        {films.map(film => <li><p>title : {film.title} genre: {film.genre}</p></li>)}
      </ul>
    </>
  )
}

export default App
