import useCurrentMovie from "../models/hooks/useCurrentMovie";
import LikeButton from "./LikeButton";

export default function HomeMovieTitle() {
    const currentMovie = useCurrentMovie();

    return (
        <div className="has-text-white" style={{
            fontWeight: 700,
            fontSize: "2rem",
            transform: "translateY(-20%)",
        }}>
            <div className="columns is-centered is-multiline">
                <div className="column is-12" style={{
                    textAlign: "center",
                }}>
                    {currentMovie?.title}
                </div>
                <LikeButton />
            </div>
        </div>
    );
}
