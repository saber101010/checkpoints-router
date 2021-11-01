import MovieCard from "./MovieCard";

function List({ movies, searchTitle ,rating}) {
  return (
    <div className="list">

      {movies
        .filter(
          (movie) =>
           movie.title
           .toLowerCase()
           .includes(searchTitle.toLowerCase().trim())&&
           movie.rating >= rating
           
        )
        .map((movie, i) => (
          <MovieCard movie={movie} key={i} />
        ))}


    </div>
  );
}
export default List;
