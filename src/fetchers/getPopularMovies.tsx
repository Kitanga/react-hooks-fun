export default function getPopularMovies() {
    return fetch("https://api.themoviedb.org/3/movie/popular?api_key=d0f5f2e135336200362af8a1a73acb17")
    .then(response => response.json());
}