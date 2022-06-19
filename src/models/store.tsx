import { createContext, useReducer } from "react";
import Reducer, { StateType } from "./reducer";

const initialState: StateType = {
    movies: [],
    likes: [],
    likedMovies: [],
    currentlyActive: 0,
};

const Store = ({ children }: any) => {
    const [state, dispatch] = useReducer(Reducer, initialState);

    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
};

export const Context = createContext(initialState as any);

export default Store;
