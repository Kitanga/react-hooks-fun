import { getDatabase, ref, child, get, push, set, query, equalTo, remove } from "firebase/database";
import { IMovieItem } from "../components/MovieItem";
import { db } from "../firebase";

export interface ILike {
    id: number;
    key: string;
}

export interface StateType {
    movies: IMovieItem[];
    likes: ILike[];
    likedMovies: IMovieItem[];
    currentlyActive: number;
}

export interface ActionType<T = any> {
    type: string;
    data: T;
}

export default function Reducer(state: StateType, action: ActionType): StateType {
    console.log("current state:", state);
    
    switch (action.type) {
        case "like":
            if (state.likes.find(like => like.id === action.data)) {
                return state;
            } else {
                // Add the like to the server as well
                const likesRef = ref(db, "likes");
                const newLikeRef = push(likesRef);

                set(newLikeRef, action.data).then(resp => {
                    console.log("Like pushed!", resp);
                });

                const likes = state.likes.concat([{ key: newLikeRef.key as string, id: action.data }]);

                return {
                    ...state,
                    likes,
                };
            }
        case "unlike":
            const like = state.likes.find(like => like.id === action.data);

            if (like) {
                const likeRef = ref(db, `likes/${like.key}`);

                remove(likeRef);

                // const newLikeRef = push(likesRef);

                // set(newLikeRef, action.data).then(() => {
                //     console.log("Like pushed!", action.data);
                // });

                const likes = state.likes.filter(like => like.id !== action.data);

                return {
                    ...state,
                    likes,
                };
            } else {
                return state;
            }
        case "set-movies":
            return {
                ...state,
                movies: action.data,
            };
        case "set-liked-movies":
            return {
                ...state,
                likedMovies: action.data,
            };
        case "set-likes":
            return {
                ...state,
                likes: action.data,
            };
        case "select-active":
            // const oldActive = state.currentlyActive;s

            const movie = state.movies.find(movie => movie.id === action.data);

            if (movie) {
                // FIXME: should probably change this approach, changing background images will ALWAYS force re-render of background image
                const bg = `url(https://image.tmdb.org/t/p/w200${movie.backdrop_path})`;

                document.body.style.backgroundImage = bg;
            }
            return {
                ...state,
                currentlyActive: action.data,
            };
        default:
            return state;
    }
}
