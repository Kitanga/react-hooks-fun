import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useCurrentState from "../models/hooks/useCurrentState";
import MovieItem, { IMovieItem } from "../routes/MovieItem";
import HomeMovieList from "./HomeMovieList";
import HomeMovieTitle from "./HomeMovieTitle";

export interface IMovies {
    movies: IMovieItem[];
    currentlyActive: number;
}

export default function HomeMovieNavigation() {
    return (
        <div id="home" style={{
            // backgroundColor: "black",
            position: "absolute",
            // bottom: "13px",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}>
            <HomeMovieTitle />
            <HomeMovieList />
        </div>
    )
}