import useCurrentState from "./useCurrentState";
import { IMovieItem } from "../../routes/MovieItem";

export default function useCurrentMovie(): IMovieItem {
    const [state] = useCurrentState();

    const { movies, currentlyActive } = state;
    
    return movies.find(movie => movie.id === currentlyActive) as IMovieItem;
}