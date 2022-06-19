import { useEffect, useState } from "react";
import Preloader from "../components/Preloader";
import getLikes from "../fetchers/getLikes";
import getMovieDetails from "../fetchers/getMovieDetails";
import useCurrentState from "../models/hooks/useCurrentState";
import MovieItem, { IMovieItem } from "./MovieItem";

const Liked = () => {
    // FIXME: this is a hack
    document.body.style.backgroundImage = "none";

    const [state, dispatch] = useCurrentState();
    const [isLoading, setLoading] = useState(true);

    const setMovies = (movies: IMovieItem[]) => {
        dispatch({ type: "set-liked-movies", data: movies });
        setLoading(false);
    }

    useEffect(() => {
        if (state.likes.length) {
            // Get the video details
            Promise.all(state.likes.map(like => getMovieDetails(like.id))).then(movies => {
                setMovies(movies);
            })
        } else {
            // Get the likes from server and then get the video data
            getLikes().then(likes => {
                // Now get video details
                Promise.all(likes.map(like => getMovieDetails(like.id))).then(movies => {
                    setMovies(movies);
                })
            })
        }
    }, [dispatch])

    return (
        <>
            {isLoading && <Preloader />}
            <div id="liked" className="columns general-padding">
                {state.likedMovies.map(movie => <MovieItem currentlyActive={-1} movie={movie} key={movie.id} />)}
            </div>
        </>
    )
}

export default Liked;
