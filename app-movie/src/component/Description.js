

function Des({movies,match}){

const movie=movies.find((movie) =>movie.id==match.params.movieid)

    return(
        <div>
<iframe width="560" height="315" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<p>{movie.description}</p>
        </div>
    )
}
export default Des