import useCurrentState from "../models/hooks/useCurrentState";

export interface IMovieItem {
    title: string;
    popularity: number;
    id: number;
    poster_path: string;
    backdrop_path: string;
    overview: string;
}

export default function MovieItem(props: { movie: IMovieItem; currentlyActive: number; }) {
    const movie = props.movie;

    const [state, dispatch] = useCurrentState();

    const canCheckCurrentlyActive = props.currentlyActive > -1;
    const isCurrentlyActive = canCheckCurrentlyActive && state.currentlyActive === movie.id;

    return (
        <div id={movie.id.toString()} className={"column is-one-fifth is-vcentered movie-item" + (isCurrentlyActive ? " has-background-white" : "")} onMouseEnter={() => {
            canCheckCurrentlyActive && dispatch({ type: "select-active", data: movie.id })
        }}>
            <img style={{ width: "100%", height: "auto" }} src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.overview} />
        </div>
    )
}