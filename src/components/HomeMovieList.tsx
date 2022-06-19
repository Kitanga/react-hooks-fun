import useCurrentState from "../models/hooks/useCurrentState";
import MovieItem from "./MovieItem";

export default function HomeMovieList() {
    const [state, dispatch] = useCurrentState();

    const { movies, currentlyActive } = state;
    
    return (
        <div className="home-container general-padding" style={{
            background: "black",
            position: "absolute",
            bottom: 13,
            width: "100%",
        }}>
            <div className="columns is-vcentered is-centered">
                <div className="column is-full">
                    <div className="columns movie-list" onWheel={event => { event.currentTarget.scrollLeft += event.deltaY }}>
                        {movies.map(movie => <MovieItem movie={movie} key={movie.id} currentlyActive={currentlyActive} />)}
                    </div>
                </div>
            </div>
        </div>
    );
}