import { IMovieItem } from "../components/MovieItem";

export default function getMovieDetails(id: number): Promise<IMovieItem> {
    return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=d0f5f2e135336200362af8a1a73acb17`).then(response => response.json());
}