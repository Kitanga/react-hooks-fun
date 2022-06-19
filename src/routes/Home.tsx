import { child, get, ref } from "firebase/database";
import { useEffect, useState } from "react";
import HomeMovieNavigation from "../components/HomeMovieNavigation";
import Preloader from "../components/Preloader";
import { db } from "../firebase";
import useCurrentState from "../models/hooks/useCurrentState";
import getLikes from "../fetchers/getLikes";
import { IMovieItem } from "./MovieItem";
import getPopularMovies from "../fetchers/getPopularMovies";
import { ILike } from "../models/reducer";

const Home = () => {
    const [state, dispatch] = useCurrentState();
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        
        const promises: Promise<any>[] = [];

        promises.push(getLikes());
        promises.push(getPopularMovies());

        // When all the data has been returned
        Promise.all(promises).then((data: any) => {
            setLoading(false);
            const [likesData, movieData] = data as [ILike[], { results: IMovieItem[] }];
            
            const results = movieData.results.sort((a, b) => b.popularity - a.popularity);

            dispatch({ type: "set-likes", data: likesData });
            dispatch({ type: "set-movies", data: results });
            dispatch({ type: "select-active", data: results[0]?.id });

            console.log("data:", movieData);
            console.log("there was a change:", state)
            console.log("there was a change:", results)
        });
    }, [dispatch]);

    console.log('home rerender!', state)

    return (
        <>
            {isLoading && <Preloader />}
            <HomeMovieNavigation />
        </>
    )
}

export default Home;
